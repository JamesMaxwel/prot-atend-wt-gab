// Definição dos tipos
type RespostaKey = 'saudacao' | 'sobre' | 'servicos' | 'cotacao' | 'seguranca' | 
                   'sustentabilidade' | 'estrutura' | 'contato' | 'trabalhe' | 'default';

interface RespostasMap {
  [key: string]: string[];
}

export const RESPOSTAS_PADRAO: Record<RespostaKey, string[]> = {
  saudacao: [
    "Olá! Sou o assistente virtual da Gabiju Transportes. Como posso ajudar você hoje? 🚛\n\nPosso auxiliar com:\n✔️ Informações sobre nossos serviços\n✔️ Cotações de transporte\n✔️ Rastreamento de cargas\n✔️ Contatos e localização\n✔️ Trabalhe conosco",
    "Bem-vindo à Gabiju Transportes! 🚛\n\nEstamos há 28 anos oferecendo soluções em transporte de cargas líquidas perigosas. Como posso ajudar você hoje?\n\nEscolha uma opção:\n1. Conhecer nossos serviços\n2. Solicitar cotação\n3. Rastrear carga\n4. Falar com um atendente",
  ],
  sobre: [
    "A Gabiju Transportes atua desde 1996 no transporte de cargas líquidas perigosas. 🏢\n\nDestaques:\n✔️ 28 anos de experiência\n✔️ Frota 100% monitorada\n✔️ Certificações ISO 9001, 39001 e SASSMAQ\n✔️ Presença em RS, SP e PR\n\nEm 2024, percorremos mais de 4,25 milhões de quilômetros, transportando 215 milhões de m³ de carga com eficiência e responsabilidade ambiental.",
  ],
  servicos: [
    "Oferecemos serviços especializados em transporte de cargas líquidas perigosas:\n\n🛢️ Transporte de Combustíveis\n- Gasolina\n- Etanol\n- Diesel\n- Outros derivados\n\n🔧 Transporte de Lubrificantes\n- Lubrificantes industriais\n- Lubrificantes automotivos\n\n⚗️ Transporte de Produtos Petroquímicos\n- Produtos químicos\n- Matérias-primas industriais\n\nGostaria de solicitar uma cotação para algum desses serviços?",
  ],
  cotacao: [
    "Para solicitar uma cotação, por favor, me informe:\n\n1. Tipo de carga (combustível, lubrificante ou produto químico)\n2. Volume aproximado\n3. Origem e destino\n4. Data prevista\n\nCom essas informações, poderemos preparar a melhor proposta para você! 📋",
  ],
  seguranca: [
    "Segurança é nossa prioridade! 🛡️\n\nNossos diferenciais:\n✔️ 28 anos sem acidentes fatais\n✔️ Frota 100% rastreada e monitorada\n✔️ Telemetria avançada\n✔️ Câmeras com IA para monitoramento\n✔️ Gestão integrada de segurança\n✔️ Motoristas altamente capacitados\n\nTodo esse cuidado garante a segurança da sua carga do início ao fim do transporte.",
  ],
  sustentabilidade: [
    "Nosso compromisso com a sustentabilidade 🌱\n\nAções principais:\n✔️ Redução de emissões de CO₂\n✔️ Consumo otimizado de combustível\n✔️ Tecnologia de ponta para eficiência\n✔️ Gestão ambiental responsável\n\nContribua com o meio ambiente escolhendo um transporte sustentável!",
  ],
  estrutura: [
    "Nossa estrutura completa para atender você:\n\n📍 Matriz em Esteio/RS\n📍 Filial em Ourinhos/SP\n📍 Filial em Araucária/PR\n\nInfraestrutura:\n✔️ Frota moderna com 60 caminhões\n✔️ Oficina própria\n✔️ Tanque de abastecimento\n✔️ Equipe especializada\n\nTudo isso para garantir a melhor qualidade no seu transporte!",
  ],
  contato: [
    "Entre em contato conosco! 📞\n\n📱 Telefone: (51) 3458-1154\n📧 E-mail: gabiju@gabiju.com.br\n📍 Matriz: Esteio/RS\n\nFiliais:\n🔹 Ourinhos/SP\n🔹 Araucária/PR\n\nNossa equipe está pronta para atender você!",
  ],
  trabalhe: [
    "Quer fazer parte do nosso time? 👥\n\nA Gabiju oferece:\n✔️ Ambiente profissional\n✔️ Desenvolvimento de carreira\n✔️ Treinamentos especializados\n✔️ Benefícios competitivos\n\nEnvie seu currículo para: gabiju@gabiju.com.br",
  ],
  default: [
    "Desculpe, não entendi completamente. Posso ajudar você com:\n\n1. Informações sobre serviços\n2. Cotações de transporte\n3. Segurança e monitoramento\n4. Contatos e localização\n5. Trabalhe conosco\n\nPor favor, escolha uma opção ou reformule sua pergunta.",
  ],
};

// Mapa de palavras-chave para cada tipo de resposta
const KEYWORDS_MAP: Record<RespostaKey, string[]> = {
  servicos: ["1", "serviço", "servico", "conhecer", "informações", "informacoes", "info"],
  cotacao: ["2", "cotação", "cotacao", "cotar", "orçamento", "orcamento", "preço", "preco", "valor"],
  seguranca: ["3", "segurança", "seguranca", "monitoramento", "rastreamento", "rastrear"],
  contato: ["4", "contato", "falar", "atendente", "telefone", "email", "localização", "localizacao"],
  trabalhe: ["5", "trabalhe", "trabalhar", "vaga", "emprego", "curriculo", "currículo"],
  sobre: ["sobre", "empresa", "história", "historia", "quem"],
  sustentabilidade: ["sustentabilidade", "ambiente", "ambiental", "co2", "carbono"],
  estrutura: ["estrutura", "filial", "unidade", "onde", "local"],
  saudacao: [],
  default: []
};

export function gerarResposta(mensagem: string): string {
  const mensagemLower = mensagem.toLowerCase().trim();

  // Saudações
  if (mensagemLower.match(/^(olá|ola|oi|bom dia|boa tarde|boa noite|hello|hi)/)) {
    return RESPOSTAS_PADRAO.saudacao[Math.floor(Math.random() * RESPOSTAS_PADRAO.saudacao.length)];
  }

  // Verifica cada conjunto de palavras-chave
  for (const [tipo, keywords] of Object.entries(KEYWORDS_MAP)) {
    // Verifica se a mensagem contém qualquer uma das palavras-chave
    if (keywords.some(keyword => 
      mensagemLower === keyword || // Correspondência exata
      mensagemLower.includes(keyword) || // Inclui a palavra-chave
      (keyword.length > 3 && mensagemLower.includes(keyword.slice(0, -2))) // Correspondência parcial para palavras longas
    )) {
      return RESPOSTAS_PADRAO[tipo as RespostaKey][0];
    }
  }

  // Se nenhuma correspondência for encontrada
  return RESPOSTAS_PADRAO.default[0];
} 