module.exports = {
    date_formated: (dateString) => {
        const date =  new Date(dateString);
        return ((date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear());
    },
    isLogin: (str) => {
        if (str === "Login") return true;
        else return false;
    },
    isEdit: (str) => {
        if (str === "edit") return true;
        else return false;
    }
};