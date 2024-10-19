// Função para navegar entre as telas
function goToNextScreen(nextScreenId) {
    const currentScreen = document.querySelector('.container > div:not(.hidden)');
    if (currentScreen) {
        currentScreen.classList.add('hidden');
    }
    document.getElementById(nextScreenId).classList.remove('hidden');
}

function goToPreviousScreen(prevScreenId) {
    const currentScreen = document.querySelector('.container > div:not(.hidden)');
    if (currentScreen) {
        currentScreen.classList.add('hidden');
    }
    document.getElementById(prevScreenId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    // Função para limpar a assinatura
    function clearSignature() {
        const canvas = document.getElementById('signature-pad');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Função para salvar a assinatura
    function saveSignature() {
        alert('Assinatura salva com sucesso!');
    }

    // Função para finalizar o registro
    function finishRegistration() {
        alert('Registro finalizado com sucesso!');
    }

    // Função para habilitar ou desabilitar o campo de outro valor
    document.querySelectorAll('input[name="donation-amount"]').forEach((radio) => {
        radio.addEventListener('change', function () {
            const otherValueInput = document.getElementById('other-value-input');
            if (this.value === 'other') {
                otherValueInput.disabled = false;
            } else {
                otherValueInput.disabled = true;
                otherValueInput.value = '';
            }
        });
    });

    // Função para permitir apenas números e o caractere decimal
    document.getElementById('other-value-input').addEventListener('input', function () {
        const value = this.value.replace(/[^0-9.,]/g, '').replace(/,/g, '.');
        const parts = value.split('.');
        this.value = parts.length > 2 ? parts[0] + '.' + parts[1] : value;
    });

    // Função para alternar a exibição da seção de IBAN
    function toggleIban(showIban) {
        const ibanSection = document.getElementById('iban-section');
        const ibanInput = document.getElementById('iban');
        if (showIban) {
            ibanSection.classList.remove('hidden');
            ibanInput.required = true;
        } else {
            ibanSection.classList.add('hidden');
            ibanInput.required = false;
            ibanInput.value = '';
        }
    }

    // Função para alternar a exibição do IBAN ao carregar a página
    document.querySelectorAll('input[name="iban-option"]').forEach((radio) => {
        radio.addEventListener('change', function () {
            toggleIban(this.value === 'com');
        });
    });

    // Configuração do canvas de assinatura
    const canvas = document.getElementById('signature-pad');
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', function (event) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(event.offsetX, event.offsetY);
    });

    canvas.addEventListener('mousemove', function (event) {
        if (isDrawing) {
            context.lineTo(event.offsetX, event.offsetY);
            context.stroke();
        }
    });

    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', function () {
        isDrawing = false;
    });
});
