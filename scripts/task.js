export class Task {
    id = 0;
    name = "";
    status = false;
    created = null;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.created = new Date();
    }

    toggleStatus() {
        console.log("can't toggle yet");
    }

    toPrettyDate() {
        return this.toShortDate(this.created) + " " + this.toShortTime(this.created);
    }

    toShortDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        let shortDate = month + "/" + day + "/" + year;
        return shortDate;
    }

    toShortTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = "am";

        if (hours > 12) {
            hours -= 12;
            ampm = "pm";
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let time = hours + ":" + minutes + ":" + seconds + " " + ampm;
        return time;
    }
}