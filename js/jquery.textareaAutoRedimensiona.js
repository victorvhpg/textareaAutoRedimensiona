/**
 * 
 * @victorvhpg
 * 03/06/2012
 * https://github.com/victorvhpg/textareaAutoRedimensiona
 * 
 * auto redimensiona altura de um textarea
 */ (function ($) {
    $.fn.textareaAutoRedimensiona = function () {
        return this.each(function () {
            var cssQueAlteraTamanho = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
            var css = {};
            //pega o css que pode alterar as dimensoes do texto
            for (var i = 0; i < cssQueAlteraTamanho.length; i++) {
                css[cssQueAlteraTamanho[i]] = $(this).css(cssQueAlteraTamanho[i]);
            }
            $(this).on("keypress keydown", function () {
                var texto = $(this).val();
                var largura = $(this).width();
                var $temp = $("<div />", {
                    "css": $.extend(css, {
                        "position": "absolute",
                        "left": -999999999999,
                        "top": -99999,
                        "width": largura + "px",
                        "float": "left",
                        "background-color": "#00ff00",
                        "word-wrap": "break-word"
                    }),
                    "html": texto.replace(/ /gim, "&nbsp;").replace(/\n/gim, "<br />")

                }).appendTo("body");
                var fs = parseInt($temp.css("font-size"));
                var altura = $temp.height() + fs;
                $(this).stop(true, true).animate({
                    "height": altura + "px"
                }, 600);
                $temp.remove();
            });
        }); //each
    }; //textareaAutoRedimensiona
})(jQuery);