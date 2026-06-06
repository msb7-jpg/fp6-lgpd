/**
 * Home Page Logic (DSR Form)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Shared Components
    Components.renderHeader();
    Components.renderFooter();
    Components.renderVersionToggle('../../home_page/index.html');

    // 2. Stepper Logic
    let currentStep = 1;
    const totalSteps = 4;

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const form = document.getElementById('dsr-form');

    const updateStepperUI = () => {
        // Toggle visibility of step contents
        for (let i = 1; i <= totalSteps; i++) {
            const content = document.getElementById(`step-content-${i}`);
            const circle = document.getElementById(`step-circle-${i}`);
            const text = document.getElementById(`step-text-${i}`);

            if (i === currentStep) {
                content.classList.remove('step-inactive');
                circle.classList.add('stepper-circle-active');
                circle.classList.remove('stepper-circle-inactive');
                text.classList.add('stepper-text-active');
                text.classList.remove('stepper-text-inactive');
            } else {
                content.classList.add('step-inactive');
                circle.classList.remove('stepper-circle-active');
                circle.classList.add('stepper-circle-inactive');
                text.classList.remove('stepper-text-active');
                text.classList.add('stepper-text-inactive');
            }
            
            // Mark completed steps
            if (i < currentStep) {
                circle.innerHTML = '<i class="fas fa-check"></i>';
                circle.classList.replace('bg-blue-600', 'bg-green-500');
            } else {
                circle.innerHTML = i;
            }
        }

        // Update Buttons
        prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
        nextBtn.innerHTML = currentStep === totalSteps ? 'Enviar Solicitação' : 'Continuar';
        if (currentStep === totalSteps) {
            nextBtn.classList.replace('bg-blue-600', 'bg-green-600');
        } else {
            nextBtn.classList.replace('bg-green-600', 'bg-blue-600');
        }
    };

    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepperUI();
        } else {
            // MOCK SUBMISSION
            nextBtn.disabled = true;
            nextBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';
            
            setTimeout(() => {
                alert('Solicitação enviada com sucesso! Você será redirecionado para o painel de acompanhamento.');
                window.location.href = '../email_page/index.html';
            }, 1500);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepperUI();
        }
    });

    // 3. Input Masks
    const cpfMask = IMask(document.getElementById('cpf-input'), {
        mask: '000.000.000-00'
    });

    const dateMask = IMask(document.getElementById('date-input'), {
        mask: Date,
        pattern: 'd/`m/Y',
        blocks: {
            d: {mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2},
            m: {mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2},
            Y: {mask: IMask.MaskedRange, from: 1900, to: 2026, maxLength: 4}
        },
        format: (date) => {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            return [day, month, year].join('/');
        },
        parse: (str) => {
            const yearMonthDay = str.split('/');
            return new Date(yearMonthDay[2], yearMonthDay[1] - 1, yearMonthDay[0]);
        }
    });
});
