"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User, Ship, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Registrar() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Ship className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-4xl font-bold text-white mb-2">Travel Ship</h1>
          <p className="text-white/80">Crie sua conta e comece a viajar</p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Cadastro</CardTitle>
            <CardDescription>
              Preencha os dados abaixo para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-[#0284c7]" />
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    placeholder="João Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    required
                    className="border-2 focus:border-[#0284c7]"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4 text-[#0284c7]" />
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    required
                    className="border-2 focus:border-[#0284c7]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-[#0284c7]" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-2 focus:border-[#0284c7]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="senha" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-[#0284c7]" />
                    Senha
                  </label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.senha}
                    onChange={(e) => setFormData({...formData, senha: e.target.value})}
                    required
                    className="border-2 focus:border-[#0284c7]"
                  />
                </div>

                <div>
                  <label htmlFor="confirmarSenha" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-[#0284c7]" />
                    Confirmar Senha
                  </label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmarSenha}
                    onChange={(e) => setFormData({...formData, confirmarSenha: e.target.value})}
                    required
                    className="border-2 focus:border-[#0284c7]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" required className="mt-1 rounded" />
                <label className="text-sm text-muted-foreground">
                  Aceito os{" "}
                  <Link href="#" className="text-[#0284c7] hover:underline">
                    termos de uso
                  </Link>{" "}
                  e a{" "}
                  <Link href="#" className="text-[#0284c7] hover:underline">
                    política de privacidade
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-lg py-6"
              >
                Criar Conta
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-[#0284c7] font-semibold hover:underline">
                  Faça login
                </Link>
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Ou cadastre-se com
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
