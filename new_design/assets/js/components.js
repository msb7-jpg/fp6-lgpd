/**
 * Modular UI Components for Casas Bahia Redesign
 */

const Components = {
    /**
     * Injects the Version Toggle into the page
     * @param {string} oldVersionPath - Relative path to the legacy version
     */
    renderVersionToggle: (oldVersionPath) => {
        const toggleHtml = `
            <div id="version-toggle" class="fixed bottom-6 right-6 z-50 flex items-center bg-white shadow-2xl rounded-full p-1 border border-gray-200">
                <div class="flex items-center space-x-1">
                    <a href="${oldVersionPath}" class="px-4 py-2 text-xs font-bold uppercase rounded-full transition-all text-gray-400 hover:text-gray-600">
                        Antiga
                    </a>
                    <div class="px-4 py-2 text-xs font-bold uppercase rounded-full bg-blue-600 text-white shadow-inner">
                        Redesign
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', toggleHtml);
    },

    /**
     * Renders a standard header
     */
    renderHeader: () => {
        const headerHtml = `
            <header class="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16 items-center">
                        <div class="flex items-center cursor-pointer" onclick="window.location.href='../index.html'">
                            <img src="https://www.casasbahia.com.br/favicon.ico" alt="Logo" class="h-8 w-8 mr-2">
                            <span class="text-xl font-bold text-blue-600">Casas Bahia <span class="text-gray-900">Privacidade</span></span>
                        </div>
                        <div class="hidden md:flex space-x-8">
                            <a href="../home_page/index.html" class="text-gray-500 hover:text-blue-600 font-medium transition-colors">Novo Pedido</a>
                            <a href="../email_page/index.html" class="text-gray-500 hover:text-blue-600 font-medium transition-colors">Acompanhar</a>
                            <a href="#" class="text-gray-500 hover:text-blue-600 font-medium transition-colors">Política de Privacidade</a>
                        </div>
                        <div class="md:hidden">
                            <button class="text-gray-500 hover:text-blue-600">
                                <i class="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
    },

    /**
     * Renders a footer
     */
    renderFooter: () => {
        const footerHtml = `
            <footer class="bg-gray-900 text-white py-12 mt-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 class="text-lg font-bold mb-4 text-blue-400">Portal de Privacidade</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Este canal é exclusivo para o exercício de direitos dos titulares de dados pessoais, 
                                em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
                            </p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Links Úteis</h3>
                            <ul class="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" class="hover:text-white">Central de Atendimento</a></li>
                                <li><a href="#" class="hover:text-white">Termos de Uso</a></li>
                                <li><a href="#" class="hover:text-white">Dúvidas Frequentes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Casas Bahia</h3>
                            <div class="flex space-x-4 text-2xl opacity-60">
                                <i class="fab fa-facebook hover:opacity-100 cursor-pointer"></i>
                                <i class="fab fa-instagram hover:opacity-100 cursor-pointer"></i>
                                <i class="fab fa-twitter hover:opacity-100 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                        <p>&copy; 2026 Casas Bahia - Grupo Casas Bahia S.A. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footerHtml);
    }
};

// Auto-init FontAwesome if not present
if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fa);
}
