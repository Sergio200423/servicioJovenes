// Crear partículas de fondo
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Crear confeti
        function createConfetti() {
            const confettiCount = 50;
            const body = document.body;

            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                body.appendChild(confetti);

                // Remover confeti después de la animación
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }
        }

        // Función principal para abrir el regalo
        function openGift() {
            const giftContainer = document.getElementById('giftContainer');
            const giftBox = document.getElementById('giftBox');
            const revealedContent = document.getElementById('revealedContent');
            const clickHint = document.getElementById('clickHint');

            // Ocultar hint de click
            clickHint.style.opacity = '0';

            // Agregar clase de animación
            giftBox.classList.add('gift-opening');

            // Crear confeti
            createConfetti();

            // Después de la animación, mostrar el contenido revelado
            setTimeout(() => {
                giftContainer.style.display = 'none';
                revealedContent.classList.add('show');
                EnviarVersiculoAleatorio()
            }, 1300);
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            const giftContainer = document.getElementById('giftContainer');
            giftContainer.addEventListener('click', openGift);
        });

        // Efecto de hover adicional
        document.getElementById('giftContainer').addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });

        document.getElementById('giftContainer').addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });

        function generarNumeroAleatorio(){
            return Math.random() * 20
        }

        function EnviarVersiculoAleatorio(){
            const versiculos = [
                        "Éxodo 15:26. Yo soy el Señor, tu médico.",
                        "Salmo 103:3. Él perdona todos tus pecados y te sana de todas tus enfermedades.",
                        "Salmo 107:20. Él envió su palabra y los sanó; los libró del sepulcro.",
                        "Jeremías 17:14. Sáname, oh Señor, y seré sano; sálvame, y será mi salvación.",
                        "Isaías 53:5. Por sus heridas somos sanados.",
                        "Isaías 40:31. Mas los que esperan al Señor tendrán nuevas fuerzas; levantarán alas como las águilas, correrán y no se cansarán, caminarán y no se fatigarán.",
                        "Filipenses 4:13. Todo lo puedo en Cristo que me fortalece.",
                        "Eclesiastés 4:9-10. Dos son mejor que uno... si uno cae, el otro puede ayudar a su compañero a levantarse.",
                        "Josué 1:9. ¿No te he mandado que te esfuerces y seas valiente? No temas ni desmayes, porque el Señor tu Dios estará contigo dondequiera que vayas.",
                        "2 Corintios 12:9. Mi gracia te basta, porque mi poder se perfecciona en la debilidad.",
                        "Nehemías 8:10. La alegría del Señor es vuestra fortaleza.",
                        "Efesios 6:10. Finalmente, fortalézcanse en el Señor y en su fuerza poderosa.",
                        "Romanos 15:13. Que el Dios de la esperanza os llene de toda alegría y paz en vuestra fe, para que abundéis en esperanza por el poder del Espíritu Santo.",
                        "Juan 16:33. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.",
                        "Salmo 23:4. Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.",
                        "Proverbios 12:25. La preocupación en el corazón del hombre lo abate, pero la buena palabra lo alegra.",
                        "Mateo 11:28-30. Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas.",
                        "1 Tesalonicenses 5:11. Animaos unos a otros y edificaos los unos a los otros.",
                        "Isaías 41:10. No temas, que yo estoy contigo; no desmayes, que yo soy tu Dios que te fortalece; sí, te ayudo, y con mi diestra de justicia te sostendré."
                    ]

            let indiceAleatorio = Math.floor(generarNumeroAleatorio())
            document.getElementById("versiculo").innerHTML = versiculos[indiceAleatorio]
        }