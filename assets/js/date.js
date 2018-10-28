import moment from "moment";

function getDate() {
    var day = moment().format("dddd");
    console.log("Have a fantastic " + day);
}

export default getDate;