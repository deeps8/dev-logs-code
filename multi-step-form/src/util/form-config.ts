// type for the multi step form
type FormConfig = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  education: {
    geoRegion: string;
    universityName: string;
    stream: string;
  };
  address: {
    location: string;
    pincode: string;
    policy: boolean;
  };
};

const FormDefaultValue: FormConfig = {
  personalInfo: { email: "", firstName: "", lastName: "" },
  education: { geoRegion: "", stream: "", universityName: "" },
  address: { location: "", pincode: "", policy: false },
};

export { FormDefaultValue };
export type { FormConfig };
