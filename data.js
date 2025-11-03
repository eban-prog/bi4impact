// ============================================
// BI4Impact - Mock Data
// Dados fictícios realistas para demonstração
// ============================================

const mockData = {
    // Configurações gerais
    config: {
        organizationName: "Associação de Exemplo",
        currentYear: 2025,
        dataGeneratedDate: "2025-01-03"
    },

    // KPIs Principais
    kpis: {
        totalCandidatos: 243,
        totalColocacoes: 156,
        taxaColocacao: 64.2, // percentagem
        tempoMedioColocacao: 23, // dias
        taxaRetencao3m: 89.7,
        taxaRetencao6m: 78.2,
        taxaRetencao12m: 68.5,
        alertasAtivos: 12
    },

    // Evolução mensal (últimos 12 meses)
    evolucaoMensal: [
        { mes: "Fev 2024", candidatos: 18, colocacoes: 11 },
        { mes: "Mar 2024", candidatos: 22, colocacoes: 14 },
        { mes: "Abr 2024", candidatos: 19, colocacoes: 12 },
        { mes: "Mai 2024", candidatos: 21, colocacoes: 13 },
        { mes: "Jun 2024", candidatos: 25, colocacoes: 16 },
        { mes: "Jul 2024", candidatos: 17, colocacoes: 10 },
        { mes: "Ago 2024", candidatos: 15, colocacoes: 9 },
        { mes: "Set 2024", candidatos: 23, colocacoes: 15 },
        { mes: "Out 2024", candidatos: 27, colocacoes: 18 },
        { mes: "Nov 2024", candidatos: 24, colocacoes: 16 },
        { mes: "Dez 2024", candidatos: 20, colocacoes: 13 },
        { mes: "Jan 2025", candidatos: 22, colocacoes: 14 }
    ],

    // Distribuição por setor de atividade
    setoresAtividade: [
        { setor: "Hotelaria e Restauração", valor: 38 },
        { setor: "Comércio", valor: 29 },
        { setor: "Construção Civil", valor: 22 },
        { setor: "Serviços de Limpeza", valor: 18 },
        { setor: "Logística e Transportes", valor: 15 },
        { setor: "Agricultura", valor: 12 },
        { setor: "Indústria", valor: 11 },
        { setor: "Outros", valor: 11 }
    ],

    // Distribuição por faixa etária
    faixasEtarias: [
        { faixa: "18-24", valor: 42 },
        { faixa: "25-34", valor: 68 },
        { faixa: "35-44", valor: 54 },
        { faixa: "45-54", valor: 47 },
        { faixa: "55+", valor: 32 }
    ],

    // Distribuição por nível de escolaridade
    escolaridade: [
        { nivel: "Básico (1º-2º ciclo)", valor: 38 },
        { nivel: "Básico (3º ciclo)", valor: 72 },
        { nivel: "Secundário", valor: 89 },
        { nivel: "Superior", valor: 44 }
    ],

    // Tipos de contrato
    tiposContrato: [
        { tipo: "Contrato Termo Certo", valor: 68 },
        { tipo: "Contrato Sem Termo", valor: 42 },
        { tipo: "Contrato Trabalho Temporário", valor: 31 },
        { tipo: "Estágio Profissional", valor: 15 }
    ],

    // Alertas ativos
    alertas: [
        {
            id: 1,
            tipo: "warning",
            titulo: "Candidatos sem follow-up",
            descricao: "5 candidatos colocados há mais de 30 dias sem follow-up registado",
            prioridade: "média",
            dataAlerta: "2025-01-02"
        },
        {
            id: 2,
            tipo: "danger",
            titulo: "Risco de abandono",
            descricao: "2 candidatos com 3+ faltas consecutivas a compromissos",
            prioridade: "alta",
            dataAlerta: "2025-01-03"
        },
        {
            id: 3,
            tipo: "info",
            titulo: "Contacto pendente",
            descricao: "12 candidatos aguardam contacto há mais de 1 semana",
            prioridade: "baixa",
            dataAlerta: "2024-12-28"
        },
        {
            id: 4,
            tipo: "warning",
            titulo: "Taxa de retenção baixa",
            descricao: "Setor de Hotelaria apresenta taxa de retenção de apenas 52% aos 6 meses",
            prioridade: "média",
            dataAlerta: "2024-12-30"
        }
    ],

    // Candidatos (amostra de 30)
    candidatos: [
        {
            id: "C001",
            nome: "Ana Silva",
            idade: 28,
            genero: "F",
            escolaridade: "Secundário",
            status: "colocado",
            dataInscricao: "2024-09-15",
            dataColocacao: "2024-10-08",
            setor: "Hotelaria e Restauração",
            tipoContrato: "Termo Certo",
            scoreSuitability: 85,
            ultimaInteracao: "2024-12-20",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C002",
            nome: "João Costa",
            idade: 35,
            genero: "M",
            escolaridade: "Básico 3º Ciclo",
            status: "ativo",
            dataInscricao: "2024-12-10",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 72,
            ultimaInteracao: "2024-12-18",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C003",
            nome: "Maria Santos",
            idade: 42,
            genero: "F",
            escolaridade: "Básico 2º Ciclo",
            status: "colocado",
            dataInscricao: "2024-08-22",
            dataColocacao: "2024-09-15",
            setor: "Serviços de Limpeza",
            tipoContrato: "Termo Certo",
            scoreSuitability: 78,
            ultimaInteracao: "2025-01-02",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C004",
            nome: "Carlos Rodrigues",
            idade: 51,
            genero: "M",
            escolaridade: "Secundário",
            status: "colocado",
            dataInscricao: "2024-07-18",
            dataColocacao: "2024-08-30",
            setor: "Construção Civil",
            tipoContrato: "Sem Termo",
            scoreSuitability: 92,
            ultimaInteracao: "2024-12-15",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C005",
            nome: "Sofia Pereira",
            idade: 23,
            genero: "F",
            escolaridade: "Superior",
            status: "ativo",
            dataInscricao: "2024-12-20",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 88,
            ultimaInteracao: "2025-01-03",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C006",
            nome: "Ricardo Fernandes",
            idade: 29,
            genero: "M",
            escolaridade: "Secundário",
            status: "colocado",
            dataInscricao: "2024-10-05",
            dataColocacao: "2024-11-12",
            setor: "Comércio",
            tipoContrato: "Termo Certo",
            scoreSuitability: 81,
            ultimaInteracao: "2024-12-28",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C007",
            nome: "Beatriz Almeida",
            idade: 38,
            genero: "F",
            escolaridade: "Básico 3º Ciclo",
            status: "risco",
            dataInscricao: "2024-11-15",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 65,
            ultimaInteracao: "2024-11-30",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C008",
            nome: "Miguel Sousa",
            idade: 44,
            genero: "M",
            escolaridade: "Básico 2º Ciclo",
            status: "colocado",
            dataInscricao: "2024-06-10",
            dataColocacao: "2024-07-20",
            setor: "Agricultura",
            tipoContrato: "Sem Termo",
            scoreSuitability: 87,
            ultimaInteracao: "2024-12-22",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C009",
            nome: "Inês Martins",
            idade: 26,
            genero: "F",
            escolaridade: "Superior",
            status: "colocado",
            dataInscricao: "2024-09-02",
            dataColocacao: "2024-10-15",
            setor: "Comércio",
            tipoContrato: "Estágio",
            scoreSuitability: 90,
            ultimaInteracao: "2025-01-02",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C010",
            nome: "Paulo Carvalho",
            idade: 57,
            genero: "M",
            escolaridade: "Básico 3º Ciclo",
            status: "ativo",
            dataInscricao: "2024-12-05",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 70,
            ultimaInteracao: "2024-12-15",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C011",
            nome: "Teresa Gonçalves",
            idade: 33,
            genero: "F",
            escolaridade: "Secundário",
            status: "colocado",
            dataInscricao: "2024-08-12",
            dataColocacao: "2024-09-28",
            setor: "Hotelaria e Restauração",
            tipoContrato: "Termo Certo",
            scoreSuitability: 83,
            ultimaInteracao: "2024-12-18",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C012",
            nome: "André Lopes",
            idade: 30,
            genero: "M",
            escolaridade: "Superior",
            status: "ativo",
            dataInscricao: "2024-12-22",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 86,
            ultimaInteracao: "2025-01-03",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C013",
            nome: "Cláudia Ribeiro",
            idade: 40,
            genero: "F",
            escolaridade: "Básico 3º Ciclo",
            status: "colocado",
            dataInscricao: "2024-07-25",
            dataColocacao: "2024-09-10",
            setor: "Serviços de Limpeza",
            tipoContrato: "Termo Certo",
            scoreSuitability: 79,
            ultimaInteracao: "2024-11-20",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C014",
            nome: "Nuno Ferreira",
            idade: 25,
            genero: "M",
            escolaridade: "Secundário",
            status: "colocado",
            dataInscricao: "2024-10-18",
            dataColocacao: "2024-11-25",
            setor: "Logística",
            tipoContrato: "Temporário",
            scoreSuitability: 75,
            ultimaInteracao: "2024-12-30",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C015",
            nome: "Patrícia Moreira",
            idade: 48,
            genero: "F",
            escolaridade: "Básico 2º Ciclo",
            status: "colocado",
            dataInscricao: "2024-05-15",
            dataColocacao: "2024-06-28",
            setor: "Hotelaria e Restauração",
            tipoContrato: "Termo Certo",
            scoreSuitability: 82,
            ultimaInteracao: "2024-12-10",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C016",
            nome: "Tiago Neves",
            idade: 22,
            genero: "M",
            escolaridade: "Secundário",
            status: "ativo",
            dataInscricao: "2024-12-28",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 68,
            ultimaInteracao: "2025-01-02",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C017",
            nome: "Cristina Pinto",
            idade: 36,
            genero: "F",
            escolaridade: "Superior",
            status: "colocado",
            dataInscricao: "2024-09-20",
            dataColocacao: "2024-10-30",
            setor: "Comércio",
            tipoContrato: "Sem Termo",
            scoreSuitability: 91,
            ultimaInteracao: "2024-12-27",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C018",
            nome: "Bruno Dias",
            idade: 31,
            genero: "M",
            escolaridade: "Básico 3º Ciclo",
            status: "colocado",
            dataInscricao: "2024-08-05",
            dataColocacao: "2024-09-22",
            setor: "Construção Civil",
            tipoContrato: "Termo Certo",
            scoreSuitability: 84,
            ultimaInteracao: "2024-12-15",
            tecnicoResponsavel: "Pedro Alves"
        },
        {
            id: "C019",
            nome: "Mariana Costa",
            idade: 27,
            genero: "F",
            escolaridade: "Secundário",
            status: "risco",
            dataInscricao: "2024-11-10",
            dataColocacao: null,
            setor: null,
            tipoContrato: null,
            scoreSuitability: 62,
            ultimaInteracao: "2024-11-25",
            tecnicoResponsavel: "Maria Santos"
        },
        {
            id: "C020",
            nome: "Rui Oliveira",
            idade: 53,
            genero: "M",
            escolaridade: "Básico 3º Ciclo",
            status: "colocado",
            dataInscricao: "2024-06-20",
            dataColocacao: "2024-08-05",
            setor: "Agricultura",
            tipoContrato: "Sem Termo",
            scoreSuitability: 88,
            ultimaInteracao: "2024-12-20",
            tecnicoResponsavel: "Pedro Alves"
        }
    ]
};

// Funções auxiliares
const utils = {
    // Calcular dias entre duas datas
    daysBetween: function(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    },

    // Formatar data para PT
    formatDate: function(dateString) {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-PT');
    },

    // Obter cor do status
    getStatusColor: function(status) {
        const colors = {
            'colocado': 'success',
            'ativo': 'info',
            'risco': 'warning',
            'inativo': 'secondary'
        };
        return colors[status] || 'secondary';
    },

    // Obter badge do status
    getStatusBadge: function(status) {
        const badges = {
            'colocado': '✅ Colocado',
            'ativo': '🟢 Ativo',
            'risco': '⚠️ Em Risco',
            'inativo': '⚫ Inativo'
        };
        return badges[status] || status;
    }
};

// Exportar (para uso em módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mockData, utils };
}
