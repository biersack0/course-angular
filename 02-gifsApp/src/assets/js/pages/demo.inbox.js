$('input:checkbox').change(function () {
  $(this).is(':checked')
    ? $(this).parent().parent().parent().parent().addClass('mail-selected')
    : $(this).parent().parent().parent().parent().removeClass('mail-selected');
}),
  (function (e) {
    'use strict';
    function t() {}
    (t.prototype.init = function () {
      new SimpleMDE({
        element: document.getElementById('simplemde1'),
        spellChecker: !1,
        placeholder: 'Write something..',
        tabSize: 2,
        status: !1,
        autosave: { enabled: !1 }
      });
    }),
      (e.SimpleMDEEditor = new t()),
      (e.SimpleMDEEditor.Constructor = t);
  })(window.jQuery),
  (function () {
    'use strict';
    window.jQuery.SimpleMDEEditor.init();
  })();