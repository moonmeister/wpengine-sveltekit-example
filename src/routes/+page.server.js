
import * as ENV from '$env/static/private';
import * as PUBLIC from '$env/static/public';

console.log("env Private", ENV);
console.log("env Public", PUBLIC);

export function load({ params }) {

    console.log("env Private", ENV);
    console.log("env Public", PUBLIC);

}