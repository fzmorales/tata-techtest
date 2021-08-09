import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import IconArrowDown from "../../assets/icons/arrow_down.svg";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";

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

interface Values {
  birthDate: string;
  mobilePhone: string;
  document: string;
  documentType: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        documentType: "dni",
        document: "",
        birthDate: "",
        mobilePhone: "",
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="form-login">
          <div className="form-login__select-group">
            <Select
              IconComponent={() => (
                <img
                  className="form-loging__icon"
                  src={IconArrowDown}
                  alt="arrow-down"
                />
              )}
              disableUnderline
              native
              value={values.documentType}
              onChange={handleChange}
              inputProps={{
                name: "documentType",
                id: "document_type",
              }}
              className="form_login__select"
            >
              <option value={"dni"}>DNI</option>
              <option value={"ce"}>CE</option>
            </Select>
            <TextField
              name="document"
              inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
              fullWidth
              required
              value={values.document}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="filled"
              label="Nro de Documento"
              style={{ backgroundColor: "#FFF" }}
              InputProps={{ classes }}
              className="form-login__select-group--joined"
            />
          </div>
          <TextField
            //inputProps={{ pattern: "[A-Za-z]{3}" }}
            inputProps={{ maxLength: 10 }}
            name="birthDate"
            required
            value={values.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Fecha de nacimiento"
            style={{ backgroundColor: "#FFF" }}
            type="date"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DateRangeRoundedIcon color="primary" />
                </InputAdornment>
              ),
              classes,
            }}
          />
          <TextField
            name="mobilePhone"
            inputProps={{ maxLength: 9, pattern: "[0-9]*" }}
            value={values.mobilePhone}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            label="Celular"
            InputProps={{ classes }}
          />
          <div className="terms-box">
            <div className="checkbox-group">
              <Checkbox
                name="protectionData"
                style={{
                  transform: "scale(1.1)",
                }}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                color="secondary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />

              <span className="checkbox-group__label">
                Acepto la
                <a
                  className="checkbox-group__link"
                  href="https://www.dummies.com/terms-of-use/"
                >
                  Política de Protección de Datos Personales y los Términos y
                  Condiciones
                </a>
              </span>
            </div>
            <div className="checkbox-group">
              <Checkbox
                name="termsConditions"
                style={{
                  transform: "scale(1.1)",
                }}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                color="secondary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <span className="checkbox-group__label">
                Acepto la
                <a
                  className="checkbox-group__link"
                  href="https://www.dummies.com/terms-of-use/"
                >
                  Política de Protección de Datos Personales y los Términos y
                  Condiciones
                </a>
              </span>
            </div>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Comencemos
          </Button>
        </Form>
      )}
    </Formik>
  );
};
