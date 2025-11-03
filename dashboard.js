// ============================================
// BI4Impact - Dashboard JavaScript
// Lógica principal do dashboard com Chart.js
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dashboard initialized');
    
    // Initialize all components
    initKPIs();
    initAlertas();
    initCharts();
    initCandidatosTable();
    initEventListeners();
});

// ============================================
// KPIs Initialization
// ============================================
function initKPIs() {
    const kpis = mockData.kpis;
    
    // Animate KPI values
    animateValue(document.getElementById('totalCandidatos'), 0, kpis.totalCandidatos, 1000);
    animateValue(document.getElementById('taxaColocacao'), 0, kpis.taxaColocacao, 1000, '%');
    animateValue(document.getElementById('totalColocacoes'), 0, kpis.totalColocacoes, 1000);
    animateValue(document.getElementById('tempoMedio'), 0, kpis.tempoMedioColocacao, 1000, ' dias');
}

function animateValue(element, start, end, duration, suffix = '') {
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        if (suffix === '%') {
            element.textContent = current.toFixed(1) + suffix;
        } else if (suffix === ' dias') {
            element.textContent = Math.round(current) + suffix;
        } else {
            element.textContent = Math.round(current) + suffix;
        }
    }, 16);
}

// ============================================
// Alertas Initialization
// ============================================
function initAlertas() {
    const alertasContainer = document.getElementById('alertasContainer');
    if (!alertasContainer) return;
    
    const alertas = mockData.alertas;
    
    alertasContainer.innerHTML = alertas.map(alerta => `
        <div class="alert-card ${alerta.tipo}">
            <div class="alert-header">
                <div class="alert-icon">
                    <i class="fas ${getAlertIcon(alerta.tipo)}"></i>
                </div>
            </div>
            <div class="alert-title">${alerta.titulo}</div>
            <div class="alert-description">${alerta.descricao}</div>
            <div class="alert-footer">
                <span class="alert-date">
                    <i class="fas fa-calendar"></i> ${utils.formatDate(alerta.dataAlerta)}
                </span>
                <a href="#" class="btn-alert">Ver detalhes →</a>
            </div>
        </div>
    `).join('');
}

function getAlertIcon(tipo) {
    const icons = {
        'warning': 'fa-exclamation-triangle',
        'danger': 'fa-exclamation-circle',
        'info': 'fa-info-circle'
    };
    return icons[tipo] || 'fa-bell';
}

// ============================================
// Charts Initialization
// ============================================
function initCharts() {
    initEvolucaoChart();
    initSetoresChart();
    initFaixasEtariasChart();
    initRetencaoChart();
    initEscolaridadeChart();
}

// Evolução Mensal Chart (Line)
function initEvolucaoChart() {
    const ctx = document.getElementById('evolucaoChart');
    if (!ctx) return;
    
    const data = mockData.evolucaoMensal;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.mes),
            datasets: [
                {
                    label: 'Candidatos Inscritos',
                    data: data.map(d => d.candidatos),
                    borderColor: '#2563EB',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Colocações Realizadas',
                    data: data.map(d => d.colocacoes),
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1F2937',
                    padding: 12,
                    borderRadius: 8,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                }
            }
        }
    });
}

// Setores de Atividade Chart (Horizontal Bar)
function initSetoresChart() {
    const ctx = document.getElementById('setoresChart');
    if (!ctx) return;
    
    const data = mockData.setoresAtividade;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.setor),
            datasets: [{
                label: 'Colocações',
                data: data.map(d => d.valor),
                backgroundColor: '#2563EB',
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Faixas Etárias Chart (Doughnut)
function initFaixasEtariasChart() {
    const ctx = document.getElementById('faixasEtariasChart');
    if (!ctx) return;
    
    const data = mockData.faixasEtarias;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.faixa + ' anos'),
            datasets: [{
                data: data.map(d => d.valor),
                backgroundColor: [
                    '#2563EB',
                    '#3B82F6',
                    '#60A5FA',
                    '#93C5FD',
                    '#DBEAFE'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        color: '#6B7280',
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Taxa de Retenção Chart (Line with points)
function initRetencaoChart() {
    const ctx = document.getElementById('retencaoChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['3 meses', '6 meses', '12 meses'],
            datasets: [{
                label: 'Taxa de Retenção',
                data: [
                    mockData.kpis.taxaRetencao3m,
                    mockData.kpis.taxaRetencao6m,
                    mockData.kpis.taxaRetencao12m
                ],
                borderColor: '#059669',
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#059669',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                }
            }
        }
    });
}

// Escolaridade Chart (Bar)
function initEscolaridadeChart() {
    const ctx = document.getElementById('escolaridadeChart');
    if (!ctx) return;
    
    const data = mockData.escolaridade;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.nivel),
            datasets: [{
                label: 'Candidatos',
                data: data.map(d => d.valor),
                backgroundColor: [
                    '#2563EB',
                    '#3B82F6',
                    '#60A5FA',
                    '#93C5FD'
                ],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// Candidatos Table Initialization
// ============================================
function initCandidatosTable() {
    const tableBody = document.getElementById('candidatosTableBody');
    if (!tableBody) return;
    
    // Show only first 10 candidates
    const candidatos = mockData.candidatos.slice(0, 10);
    
    tableBody.innerHTML = candidatos.map(candidato => `
        <tr>
            <td><strong>${candidato.id}</strong></td>
            <td>${candidato.nome}</td>
            <td>${candidato.idade}</td>
            <td>${candidato.escolaridade}</td>
            <td>
                <span class="status-badge ${utils.getStatusColor(candidato.status)}">
                    ${utils.getStatusBadge(candidato.status)}
                </span>
            </td>
            <td>${utils.formatDate(candidato.dataInscricao)}</td>
            <td>${utils.formatDate(candidato.ultimaInteracao)}</td>
            <td>
                <button class="btn-table" onclick="viewCandidato('${candidato.id}')">
                    <i class="fas fa-eye"></i> Ver
                </button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// Event Listeners
// ============================================
function initEventListeners() {
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.classList.add('fa-spin');
            setTimeout(() => {
                this.classList.remove('fa-spin');
                showNotification('Dados atualizados!', 'success');
            }, 1000);
        });
    }
    
    // Export button
    const exportBtn = document.getElementById('exportBtn');
    const exportModal = document.getElementById('exportModal');
    if (exportBtn && exportModal) {
        exportBtn.addEventListener('click', function() {
            exportModal.classList.add('active');
        });
        
        exportModal.querySelector('.btn-close').addEventListener('click', function() {
            exportModal.classList.remove('active');
        });
        
        exportModal.addEventListener('click', function(e) {
            if (e.target === exportModal) {
                exportModal.classList.remove('active');
            }
        });
    }
    
    // Period selector
    const periodButtons = document.querySelectorAll('.btn-period');
    periodButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            periodButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            showNotification('Período alterado para ' + this.textContent, 'info');
        });
    });
    
    // Sidebar navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                navItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                const section = this.querySelector('span').textContent;
                showNotification('Funcionalidade "' + section + '" em demonstração', 'info');
            }
        });
    });
}

// ============================================
// Helper Functions
// ============================================
function viewCandidato(id) {
    showNotification('Visualizar candidato ' + id + ' (funcionalidade de demonstração)', 'info');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: getNotificationColor(type),
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        animation: 'slideInRight 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'fa-check-circle',
        'error': 'fa-times-circle',
        'warning': 'fa-exclamation-triangle',
        'info': 'fa-info-circle'
    };
    return icons[type] || 'fa-info-circle';
}

function getNotificationColor(type) {
    const colors = {
        'success': '#10B981',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': '#3B82F6'
    };
    return colors[type] || '#3B82F6';
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fa-spin {
        animation: fa-spin 1s infinite linear;
    }
    
    @keyframes fa-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Dashboard JavaScript loaded successfully');
