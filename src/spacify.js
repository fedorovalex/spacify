String.prototype.spacify = function () {
    return (this.match(/./g) || new Array(this)).join(" ");
}
