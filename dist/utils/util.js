"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var util = null;
util.regexp = {
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    url: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
    number: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
    isZipCode: /^[0-9]{6}$/,
    phone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
    idCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
};
exports.default = util;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsidXRpbCIsInJlZ2V4cCIsImVtYWlsIiwidXJsIiwibnVtYmVyIiwiaXNaaXBDb2RlIiwicGhvbmUiLCJpZENhcmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxJQUFiO0FBQ0FBLEtBQUtDLE1BQUwsR0FBYztBQUNWQyxXQUFPLDZDQURHO0FBRVZDLFNBQUssdUZBRks7QUFHVkMsWUFBUSw2Q0FIRTtBQUlWQyxlQUFXLFlBSkQ7QUFLVkMsV0FBTyx1RUFMRztBQU1WQyxZQUFRO0FBTkUsQ0FBZDtrQkFRZVAsSSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXRpbCA9IG51bGw7XHJcbnV0aWwucmVnZXhwID0ge1xyXG4gICAgZW1haWw6IC9cXHcrKFstKy5dXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKi8sXHJcbiAgICB1cmw6IC9eaHR0cHM/OlxcL1xcLygoW2EtekEtWjAtOV8tXSkrKFxcLik/KSooOlxcZCspPyhcXC8oKFxcLik/KFxcPyk/PT8mP1thLXpBLVowLTlfLV0oXFw/KT8pKikqJC9pLFxyXG4gICAgbnVtYmVyOiAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLyxcclxuICAgIGlzWmlwQ29kZTogL15bMC05XXs2fSQvLFxyXG4gICAgcGhvbmU6IC9eKDB8ODZ8MTc5NTEpPygxM1swLTldfDE1WzAxMjM1Njc4OV18MTdbNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLFxyXG4gICAgaWRDYXJkOiAvXiheWzEtOV1cXGR7N30oKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKVxcZHszfSQpfCheWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pKChcXGR7NH0pfFxcZHszfVtYeF0pJCkkLyxcclxufVxyXG5leHBvcnQgZGVmYXVsdCB1dGlsIl19