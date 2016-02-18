module.exports = {
    normalizeEntityName: function () {},

    afterInstall: function () {
        return this.addBowerPackagesToProject([
            'datatables.net',
            'datatables.net-dt'
        ]);
    }
}
