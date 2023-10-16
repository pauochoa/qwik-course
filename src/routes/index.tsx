import { component$ } from "@builder.io/qwik";
import { HelloMessage } from "../components/hello-message/HelloMessage";

export default component$(() => {

    console.log("Initializing HelloWorld component");
    return(
       <HelloMessage/>
    );
 

});

export const HelloMessage = component$(() => {
    return (
        <h1>Welcome to this Qwik course!</h1>
    );
});
