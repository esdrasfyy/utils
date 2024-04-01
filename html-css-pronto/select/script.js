document.addEventListener("DOMContentLoaded", () => {
    let os = new RollingRadios("os");
});
class RollingRadios {
    constructor(radioName) {
        this.circles = document.querySelector(".circles");
        this.data_attr = "data-radio-index";
        this.last_focused_index = 0;
        this.radio_name = radioName;

        this.first_focused_index();
        document.addEventListener("change", this.update_last_focused_index.bind(this));
    }
    first_focused_index() {
        let radios = document.getElementsByName(this.radio_name);
        radios.forEach(r => {
            if (r.checked)
                this.update_last_focused_index(r);
        });
    }
    flip_delays(radioIndex) {
        // flip the delays depending on which index is greater
        if (this.circles) {
            let lfi = this.last_focused_index,
                flipClass = "circles-flip-delays";

            if (radioIndex > lfi)
                this.circles.classList.add(flipClass);
            else if (radioIndex < lfi)
                this.circles.classList.remove(flipClass);
        }
    }
    update_last_focused_index(e) {
        let tar = e.target || e,
            radioIndex = tar.getAttribute(this.data_attr);

        if (tar.name == this.radio_name && radioIndex) {
            this.flip_delays(radioIndex);
            this.last_focused_index = radioIndex;
        }
    }
}