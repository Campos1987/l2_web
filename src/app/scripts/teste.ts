import mysql from 'mysql2/promise';
import AWS from 'aws-sdk';
import { readFileSync } from 'node:fs';
AWS.config.update({ region: 'us-east-1' });

(async () => {
  let password: string = 'BrhL0j*v)c2Tt7~$AQrf7yu(zFJa';
  const sm = new AWS.SecretsManager();
  const sec = await sm
    .getSecretValue({
      SecretId:
        'arn:aws:secretsmanager:us-east-1:853754098610:secret:rds!db-76f1a127-7009-4cf0-b957-2a5dd7b3a7eb-2rh3VC',
    })
    .promise();
  password = JSON.parse(sec.SecretString as string).password;

  let conn;
  try {
    conn = await mysql.createConnection({
      host: 'web-gk.cgv2ygaqgkan.us-east-1.rds.amazonaws.com',
      port: 3306,
      database: 'mysql',
      user: 'admin',
      password,
      ssl: {
        rejectUnauthorized: false,
        ca: readFileSync('/certs/global-bundle.pem'),
      },
    });
    const [rows]: any[] = await conn.execute('SELECT VERSION() AS v');
    console.log(rows[0].v);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    if (conn) await conn.end();
  }
})().catch(console.error);
