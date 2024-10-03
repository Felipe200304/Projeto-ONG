function goToNextScreen(nextScreenId) {
    const currentScreen = document.querySelector('.container > div:not(.hidden)');
    currentScreen.classList.add('hidden');
    document.getElementById(nextScreenId).classList.remove('hidden');
}

function goToPreviousScreen(prevScreenId) {
    const currentScreen = document.querySelector('.container > div:not(.hidden)');
    currentScreen.classList.add('hidden');
    document.getElementById(prevScreenId).classList.remove('hidden');
}

function createUser() {
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    alert('Usuário criado com sucesso!');
    goToNextScreen('login-screen');
}

// Funções de Assinatura
function clearSignature() {
    const canvas = document.getElementById('signature-pad');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
    alert('Assinatura salva com sucesso!');
}

function finishRegistration() {
    alert('Registro finalizado com sucesso!');
}

// Função para habilitar ou desabilitar o campo de outro valor
document.querySelectorAll('input[name="donation-amount"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        const otherValueInput = document.getElementById('other-value-input');
        if (this.value === 'other') {
            otherValueInput.disabled = false;  // Habilita o campo
        } else {
            otherValueInput.disabled = true;   // Desabilita o campo
            otherValueInput.value = '';        // Limpa o campo
        }
    });
});

// Função para permitir apenas números e o caractere decimal
document.getElementById('other-value-input').addEventListener('input', function (event) {
    const value = this.value;
    

    const validValue = value.replace(/[^0-9.,]/g, '').replace(/,/g, '.');

    const parts = validValue.split('.');
    if (parts.length > 2) {
        this.value = parts[0] + '.' + parts[1];
    } else {
        this.value = validValue;
    }
});

