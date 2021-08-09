import * as React from "react";
import { useState } from "react";
import IconShield from "../../assets/img/gl_shield-20x20.png";
import IconMobile from "../../assets/img/gl_mobile-20x20.png";
import IconHospital from "../../assets/img/gl_hospital-20x20-1.png";
import IconMoney from "../../assets/img/gl_money-20x20-1.png";
import Illustration from "../../assets/img/Illustration-1.png";
import Grid from "@material-ui/core/Grid";
import { LoginForm } from "../forms/LoginForm";
import { VerifyForm } from "../forms/VerifyForm";
import { ChooseForm } from "../forms/ChooseForm";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

interface Params {
  birthDate: string;
  mobilePhone: string;
  document: string;
  documentType: string;
}

interface userData {
  birthDate: string;
  mobilePhone: string;
  document: string;
  documentType: string;
  firstName: string;
  fatherLastName: string;
  motherLastName: string;
}

function capitalizeName(text: string) {
  return (
    text.split(" ")[0].charAt(0).toUpperCase() +
    text.split(" ")[0].slice(1).toLowerCase()
  );
}

export const Main: React.FC = () => {
  const [section, setSection] = useState("login");
  const [loading, setLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [userData, setUserData] = useState({
    birthDate: "",
    mobilePhone: "",
    document: "",
    documentType: "",
    firstName: "",
    fatherLastName: "",
    motherLastName: "",
  });

  const requestUser = (params: Params) => {
    setLoading(true);
    setUserNotFound(false);
    axios
      .post("https://freestyle.getsandbox.com/dummy/obtenerdatospersona")
      .then((response) => {
        const userFetched = response.data.data.tercero;
        console.log(userFetched);
        if (params.document === userFetched.numDocumento) {
          setLoading(false);
          setSection("verify");
          const userDataObj: userData = {
            birthDate: userFetched.fecNacimiento,
            mobilePhone: userFetched.telefono,
            document: userFetched.numDocumento,
            documentType: userFetched.tipoDocumento,
            firstName: userFetched.nombres,
            fatherLastName: userFetched.apellidoPaterno,
            motherLastName: userFetched.apellidoMaterno,
          };
          setUserData(userDataObj);
        } else {
          console.log("userNotFound");
          setLoading(false);
          setUserNotFound(true);
        }
      });
  };

  return (
    <>
      {section === "login" && (
        <Grid container spacing={0} className="container">
          <Grid item xs={6} className="feature-side">
            <div className="feature-container">
              <div className="title">
                <h2 className="title__top">Seguro de</h2>
                <h2 className="title__bottom">Salud</h2>
                <ul className="list-features">
                  <li className="list-features__item">
                    <img
                      className="list-features__icon"
                      src={IconShield}
                      alt="shield"
                    />
                    Cómpralo de manera fácil y rápida
                  </li>
                  <li className="list-features__item">
                    <img
                      className="list-features__icon"
                      src={IconMobile}
                      alt="mobile"
                    />
                    Cotiza y compra tu seguro 100% digital
                  </li>
                  <li className="list-features__item">
                    <img
                      className="list-features__icon"
                      src={IconMoney}
                      alt="money"
                    />
                    hasta S/. 12 millones de cobertura anual
                  </li>
                  <li className="list-features__item">
                    <img
                      className="list-features__icon"
                      src={IconHospital}
                      alt="hospital"
                    />
                    Más de 300 clínicas en todo el Perú.
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="feature-side__illustration"
              src={Illustration}
              alt="illustration"
            />
          </Grid>
          <Grid item xs={6} className="form-side">
            <div className="form-container">
              <div className="form-title">
                <h3 className="form-title__main">
                  Obtén tu{" "}
                  <span className="form-title__main--intent">seguro ahora</span>
                </h3>
                <h5 className="form-title__subtitle">
                  Ingresa los datos para comenzar
                </h5>
                {userNotFound && (
                  <p className="form-title__error">
                    Usuario no encontrado, vuelva a intentar
                  </p>
                )}
              </div>
              {loading ? (
                <div style={{ textAlign: "center", marginTop: 200 }}>
                  <CircularProgress color="primary" />
                  <h3 className="form-title__subtitle">Buscando usuario...</h3>
                </div>
              ) : (
                <LoginForm
                  onSubmit={({
                    birthDate,
                    mobilePhone,
                    document,
                    documentType,
                  }) => {
                    requestUser({
                      birthDate,
                      mobilePhone,
                      document,
                      documentType,
                    });
                  }}
                />
              )}
            </div>
          </Grid>
        </Grid>
      )}
      {section === "verify" && (
        <Grid container spacing={0} className="container">
          <Grid item xs={3} className="feature-side feature-side--no-content">
            <div className="feature-container"></div>
            <img
              className="feature-side__illustration"
              src={Illustration}
              alt="illustration"
            />
          </Grid>
          <Grid item xs={9} className="form-side">
            <div className="form-container">
              <div className="form-title">
                <h3 className="form-title__main">
                  Hola,{" "}
                  <span className="form-title__main--intent">
                    {capitalizeName(userData.firstName)}
                  </span>
                </h3>
                <h5 className="form-title__subtitle">
                  Valida que los datos sean correctos
                </h5>
              </div>
              <VerifyForm
                userData={userData}
                onSubmit={() => {
                  console.log("VAMOS a Choose");
                  setSection("choose");
                }}
              />
            </div>
          </Grid>
        </Grid>
      )}
      {section === "choose" && (
        <Grid container spacing={0} className="container">
          <Grid item xs={3} className="feature-side feature-side--no-content">
            <div className="feature-container"></div>
            <img
              className="feature-side__illustration"
              src={Illustration}
              alt="illustration"
            />
          </Grid>
          <Grid item xs={9} className="form-side">
            <div className="form-container">
              <div className="form-title">
                <h3 className="form-title__main">
                  Elige{" "}
                  <span className="form-title__main--intent">
                    tu protección
                  </span>
                </h3>
                <h5 className="form-title__subtitle">
                  Selecciona tu plan de salud ideal.
                </h5>
              </div>
              <ChooseForm
                userData={userData}
                onSubmit={() => {
                  console.log("VAMOS a thankyou");
                  setSection("thankyou");
                }}
              />
            </div>
          </Grid>
        </Grid>
      )}
      {section === "thankyou" && (
        <Grid container spacing={0} className="container">
          <Grid item xs={3} className="feature-side feature-side--no-content">
            <div className="feature-container"></div>
            <img
              className="feature-side__illustration"
              src={Illustration}
              alt="illustration"
            />
          </Grid>
          <Grid item xs={9} className="form-side">
            <div className="form-container form-container--left">
              <div className="form-title">
                <hr className="form-title__separator" />
                <h3 className="form-title__main form-title__main--big">
                  ¡Gracias por{" "}
                  <span className="form-title__main--intent">
                    confiar en nosotros!
                  </span>
                </h3>
                <h5 className="form-title__subtitle">
                  Queremos conocer mejor la salud de los asegurados. Un asesor
                  se pondrá en contacto contigo en las siguientes 48 horas.
                </h5>
              </div>
              <div
                style={{ marginTop: 50, marginBottom: 50, textAlign: "right" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => {
                    setSection("login");
                  }}
                >
                  Ir a salud
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};
