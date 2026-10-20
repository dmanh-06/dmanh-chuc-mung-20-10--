onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  $(document).ready(function () {
            var envelope = $("#envelope");
            var btn_open = $("#open");
            var btn_reset = $("#reset");
            var modal = $("#letter-modal");
            var typewriterContainer = $("#typewriter-text");
            var typingTimer;
            var letterLines = [
        "✨ Có duyên mới gặp, có tò mò mới bấm!",
        "Chúc mừng bạn đã ghé vào một góc nhỏ dành riêng cho những điều tốt đẹp.",
        "Nhân ngày 20/10, mong rằng khi mở chiếc thiệp này,",
        "bạn sẽ nhận được một chút niềm vui và có thêm một lý do để mỉm cười. 💐","",
        "💌 Women's day 💗",
        "Chúc mừng Ngày Phụ nữ Việt Nam 20/10!",
        "Chúc người đẹp luôn mạnh khỏe, luôn trẻ trung, xinh đẹp và lúc nào cũng rạng rỡ như ánh mặt trời ✨",
        "Đặc biệt là trong túi lúc nào cũng có tiền hehe 💸, đi đâu cũng gặp may, làm gì cũng thuận lợi, học hành suôn sẻ, điểm số cao chót vót.",
        "Chúc mọi điều tốt đẹp nhất sẽ đến với bạn, buồn phiền thì ít mà niềm vui thì nhiều. Luôn được yêu thương, trân trọng và đối xử thật dịu dàng nhé! 💐","",
        "Cuối cùng, chúc bạn có một ngày 20/10 thật vui vẻ, nhận được nhiều quà, nhiều hoa và nhiều lời chúc.",
        "Còn nếu chưa có ai tặng quà thì cứ xem chiếc thiệp này là tấm lòng của tui nha =))))",
        "Happy Vietnamese Women's Day! 💖🌷"
    
        ];


            envelope.click(function () {
                openEnvelope();
            });
            btn_open.click(function () {
                openEnvelope();
            });
            btn_reset.click(function () {
                closeEnvelope();
            });

            $("#close-modal").click(function () {
                closeModal();
            });

            $(".modal-backdrop").click(function () {
                closeModal();
            });

            function openEnvelope() {
                envelope.addClass("open").removeClass("close");
                // Mở modal sau khi envelope mở (0.5s delay)
                setTimeout(function() {
                    showModal();
                }, 500);
            }

            function closeEnvelope() {
                envelope.addClass("close").removeClass("open");
                closeModal();
            }

            function showModal() {
                modal.fadeIn(300);
                startTypewriter();
            }

            function closeModal() {
                modal.fadeOut(300);
                stopTypewriter();
                typewriterContainer.html("");
            }

            function stopTypewriter() {
                if (typingTimer) {
                    clearTimeout(typingTimer);
                    typingTimer = null;
                }
            }

            function startTypewriter() {
                stopTypewriter();
                typewriterContainer.html('<span class="caret"></span>');
                
                var lineIndex = 0;
                var charIndex = 0;
                var currentLine = "";

                function typeNextChar() {
                    if (lineIndex < letterLines.length) {
                        currentLine = letterLines[lineIndex];
                        
                        if (charIndex < currentLine.length) {
                            var char = currentLine.charAt(charIndex);
                            var caretEl = typewriterContainer.find(".caret");
                            caretEl.before(char);
                            charIndex++;
                            
                            var speed = char === ' ' ? 10 : 30 + Math.floor(Math.random() * 20);
                            typingTimer = setTimeout(typeNextChar, speed);
                        } else {
                            // Xong một dòng, thêm <br> và chuyển sang dòng mới
                            var caretEl = typewriterContainer.find(".caret");
                            caretEl.before("<br>");
                            lineIndex++;
                            charIndex = 0;
                            typingTimer = setTimeout(typeNextChar, 200); // Delay giữa các dòng
                        }
                    }
                }

                typeNextChar();
            }

        })