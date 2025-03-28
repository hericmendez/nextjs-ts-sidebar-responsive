import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define rotas públicas (não requerem autenticação)
  const isPublicRoute = pathname === "/login" || pathname === "/register";

  // Ignorar recursos estáticos e arquivos específicos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // Permite o acesso às rotas públicas diretamente
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Usuários sem token (validados no client-side) serão redirecionados
  console.log("Proteção da rota realizada no client-side.");
  return NextResponse.next(); // Todas as proteções serão feitas no client-side
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)", // Ignora recursos estáticos
  ],
};
