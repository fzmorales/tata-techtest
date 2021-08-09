import * as React from "react";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import IconArrowDown from "../../assets/icons/arrow_down.svg";
import { TextField, Button } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

interface UserData {
  birthDate: string;
  mobilePhone: string;
  document: string;
  documentType: string;
  firstName: string;
  fatherLastName: string;
  motherLastName: string;
}

interface Values {
  birthDate: string;
  mobilePhone: string;
  document: string;
  documentType: string;
}

interface Props {
  userData: UserData;
  onSubmit: (values: Values) => void;
}

export const VerifyForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const [insuranceType, setInsuranceType] = React.useState("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };
  const handleInsuranceTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInsuranceType((event.target as HTMLInputElement).value);
  };

  return (
    <Formik
      initialValues={{
        documentType: "dni",
        document: "",
        birthDate: "",
        mobilePhone: "",
        firstName: "",
        fatherLastName: "",
        motherLastName: "",
      }}
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="form-login">
          <h5 className="form-login__title-group">
            Datos personales del titular
          </h5>
          <div className="form-login__select-group">
            <Select
              IconComponent={() => (
                <img
                  className="form-loging__icon"
                  src={IconArrowDown}
                  alt="logo"
                />
              )}
              disableUnderline
              native
              value={props.userData.documentType}
              onChange={handleChange}
              inputProps={{
                name: "documentType",
                id: "document_type",
              }}
              className="form_login__select"
            >
              <option value={"2"}>DNI</option>
              <option value={"1"}>CE</option>
            </Select>
            <TextField
              name="document"
              inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
              fullWidth
              required
              value={props.userData.document}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="filled"
              label="Nro de Documento"
              style={{ backgroundColor: "#FFF" }}
              className="form-login__select-group--joined"
              InputProps={{ classes }}
            />
          </div>
          <TextField
            name="firstName"
            value={props.userData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Nombres"
            InputProps={{ classes }}
          />
          <TextField
            name="fatherLastName"
            value={props.userData.fatherLastName}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Apellido Paterno"
            InputProps={{ classes }}
          />
          <TextField
            name="motherLastName"
            value={props.userData.motherLastName}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Apellido Materno"
            InputProps={{ classes }}
          />
          <TextField
            name="birthDate"
            value={props.userData.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Fecha de Nacimiento"
            InputProps={{ classes }}
          />

          <h5 className="form-login__title-group">Género</h5>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="Masculino"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="Fenemenino"
            />
          </RadioGroup>
          <h5 className="form-login__title-group">
            ¿A quién vamos a asegurar?
          </h5>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={insuranceType}
            onChange={handleInsuranceTypeChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="Solo a mi"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="A mí y a mi familia"
            />
          </RadioGroup>
          <div style={{ marginTop: 150, marginBottom: 50, textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!!!(gender && insuranceType)}
            >
              Continuar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
