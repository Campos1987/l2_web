"use client";
import config from "@/json/configServer.json";
import Link from "next/link";
import { InputValid } from "./Inputs";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    login: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev, // Mantém os outros campos que não mudaram
      [name]: value, // Atualiza SÓ o campo que tem o nome do input (ex: "email")
    }));
  };

  return (
    <div className=" min-h-screen max-w-lg m-auto py-12 px-6">
      <form>
        <div className="max-w-5xl mx-auto space-y-6">
          <h1>Crie sua Conta </h1>
          <p className=" text-center mb-2">
            Crie sua conta e prepare-se para entrar no mundo épico de{" "}
            {config.serverName}.
          </p>
          <p className="text-center">
            Já tem uma Conta {config.serverName}?{" "}
            <Link href={"/login"} className="font-semibold text-violet-500">
              {" "}
              Inicie sessão.
            </Link>
          </p>
          {/* Nome de Usuário */}
          <h2>Informações Usuário</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <InputValid
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
              type="text"
              placeholder="Nome"
              name="name"
              required
              validation={{
                vText: "Obrigatorio! Apenas Letras",
              }}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-1">
            <InputValid
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
              type="text"
              placeholder="Sobrenome"
              name="lastName"
              required
              validation={{
                vText: "Obrigatorio! Apenas Letras",
              }}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <InputValid
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            type="text"
            placeholder="Email"
            name="email"
            required
            validation={{
              vEmail: true,
            }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <h2>Informações Conta</h2>
        <div>
          <InputValid
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            type="text"
            placeholder="Login"
            name="login"
            required
            validation={{
              vLength: 5,
              vText: "Obrigatorio! Apenas Letras e números",
            }}
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputValid
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            type="text"
            placeholder="Email"
            name="email"
            required
            validation={{
              vEmail: true,
            }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputValid
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
            type="text"
            placeholder="Email"
            name="email"
            required
            validation={{
              vEmail: true,
            }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

{
  /* <InputValid
      className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500"
      type="text"
      placeholder="nome@exemplo.com"
      name="email"
      required
      validation={{
        vText: "Informe um email valído",
        vLength: 5,
        vNumber: 2,
        vLower: 1,
        vUpper: 1,
        vSpecial: 1,
      }}
      value={formData.email}
      onChange={handleChange}
    /> */
}
