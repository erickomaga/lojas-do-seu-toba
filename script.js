const nome = document.getElementById("fNome").value.trim();
const whatsapp = document.getElementById("fWhats").value.trim();
const email = document.getElementById("fEmail").value.trim();
const cidade = document.getElementById("fCidade").value.trim();
const estadoSelect = document.getElementById("fEstado");
const estado = estadoSelect.options[estadoSelect.selectedIndex].text;
const capital = document.getElementById("fInvestimento").value;

const mensagem = `Olá! Me chamo ${nome}, quero abrir uma franquia da Lojas do Seu Toba e gostaria de saber mais informações.

Meu WhatsApp é ${whatsapp}.
Meu e-mail é ${email}.
Meu capital disponível para investir é ${capital}.
Quero abrir a franquia na cidade de ${cidade}, no estado de ${estado}.

Gostaria de receber mais informações sobre a franquia, investimento e próximos passos.`;

const url = `https://wa.me/5511917761700?text=${encodeURIComponent(mensagem)}`;
window.open(url, "_blank");