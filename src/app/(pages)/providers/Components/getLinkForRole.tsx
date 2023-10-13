import { useState } from "react";





export const getLinkForRole = (role: "independentDoctor" | "auth/clinicSignUp" | "hospital", links: { independentDoctor: string, clinic: string, hospital: string }) => {
  switch (role) {
    case "independentDoctor":
      return links.independentDoctor;
    case "auth/clinicSignUp":
      return links.clinic;
    case "hospital":
      return links.hospital;
    default:
      return "/";
  }
};
