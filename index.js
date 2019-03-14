console.error = function (message) {  // eslint-disable-line no-console
    throw new Error(message);
};
function fn() {
    console.error("Hello world!");
}
fn();
