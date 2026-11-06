// Ícones próprios da Blocomax, em grade de 48px: traço principal + detalhe em laranja.
export const icones = {
  // Etapas
  conversa: {
    base: 'M8 12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H21l-9 7v-7a4 4 0 0 1-4-4z',
    acento: 'M16 17h16M16 25h10',
  },
  terreno: {
    base: 'M5 40 13 24h22l8 16z',
    acento: 'M24 33V9l10 4.5-10 4.5',
  },
  projeto: {
    base: 'M10 6h28a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
    acento: 'M14 26 24 17l10 9M18 23v11h12V23',
  },
  contrato: {
    base: 'M12 6h18l8 8v26a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM30 6v8h8',
    acento: 'M17 29l5 5 9-10',
  },
  obra: {
    base: 'M6 10h36v28H6zM6 19.3h36M6 28.7h36M24 10v9.3M24 28.7V38',
    acento: 'M15 19.3h18v9.4H15z',
  },
  chave: {
    base: 'M22.5 25.5 41 7M33 15l6 6M27 21l4 4',
    acento: 'M7 33a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M14 33h.01',
  },
  // Contato
  telefone: {
    base: 'M13 6h6l3.5 10-5 3.5a24 24 0 0 0 11 11l3.5-5 10 3.5v6a4 4 0 0 1-4 4C21 39 9 27 9 10a4 4 0 0 1 4-4z',
    acento: 'M29 7a12 12 0 0 1 12 12M29 14a5 5 0 0 1 5 5',
  },
  pessoa: {
    base: 'M15 15a9 9 0 1 0 18 0a9 9 0 1 0-18 0',
    acento: 'M7 43c0-9 7-14 17-14s17 5 17 14',
  },
  email: {
    base: 'M9 10h30a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z',
    acento: 'M7 13l17 14 17-14',
  },
  relogio: {
    base: 'M6 24a18 18 0 1 0 36 0a18 18 0 1 0-36 0',
    acento: 'M24 13v11l8 5',
  },
  local: {
    base: 'M24 44S8 30 8 20a16 16 0 0 1 32 0c0 10-16 24-16 24z',
    acento: 'M18 20a6 6 0 1 0 12 0a6 6 0 1 0-12 0',
  },
  // Dados das obras
  casa: {
    base: 'M12 21v19h24V21M20 40V29h8v11',
    acento: 'M5 25 24 8l19 17',
  },
  area: {
    base: 'M8 8h32v32H8z',
    acento: 'M17 31l14-14M22 17h9v9',
  },
  quartos: {
    base: 'M5 11v29M5 33h38v7M43 33v-7a6 6 0 0 0-6-6H21v13',
    acento: 'M9 25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0',
  },
} as const;

export type NomeIcone = keyof typeof icones;
export const nomesDeIcones = Object.keys(icones) as NomeIcone[];
