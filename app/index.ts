import select from "app/components/select";

select({
  message: "Pilih",
  choices: [
    { name: "Its", value: "TT" },
    { name: "The Repeat", value: "Makes" },
  ],
}).then((res) => console.log(res));

export * from "app/types";
export * from "./pages/index";
export * from "./interfaces";
