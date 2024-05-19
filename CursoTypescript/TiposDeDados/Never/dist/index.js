"use strict";
function error(message, code) {
    throw { message: message, errorCode: code };
}
error('Aplicação falhou', 500);
