import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconArrowDown from "../../assets/icons/arrow_down.svg";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconSelected from "../../assets/img/gl_correct.png";
import IconEmpty from "../../assets/img/gl_empty.png";
import IconShield from "../../assets/img/Illustration.png";
import IconShield1 from "../../assets/img/Illustration_plan1.png";
import IconShield3 from "../../assets/img/Illustration_plan3.png";
import IconShield4 from "../../assets/img/Illustration_plan4.png";
import IconHeart from "../../assets/img/icon_heart.png";
import IconHeartGray from "../../assets/img/heart_gray.png";
import Divider from "@material-ui/core/Divider";

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

export const ChooseForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [cardActive, setCardActive] = useState("first");

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div
            className="plan-box"
            onClick={() => {
              setCardActive("first");
            }}
            style={
              cardActive === "first"
                ? { borderColor: "#83CC5E", borderWidth: 2 }
                : { borderColor: "#DEDEDE", borderWidth: 1 }
            }
          >
            <div className="plan-box__icon">
              {cardActive === "first" ? (
                <img
                  className="plan-box__icon-img"
                  src={IconSelected}
                  alt="select"
                />
              ) : (
                <img
                  className="plan-box__icon-img"
                  src={IconEmpty}
                  alt="select"
                />
              )}
            </div>
            <div className="plan-box__title">Básico</div>
            <div className="plan-box__price">
              <span className="plan-box__small">S/</span>
              <span className="plan-box__big">160</span>
            </div>
            <div className="plan-box__footer">mensual</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className="plan-box"
            onClick={() => {
              setCardActive("second");
            }}
            style={
              cardActive === "second"
                ? { borderColor: "#83CC5E", borderWidth: 2 }
                : { borderColor: "#DEDEDE", borderWidth: 1 }
            }
          >
            <div className="plan-box__icon">
              {cardActive === "second" ? (
                <img
                  className="plan-box__icon-img"
                  src={IconSelected}
                  alt="select"
                />
              ) : (
                <img
                  className="plan-box__icon-img"
                  src={IconEmpty}
                  alt="select"
                />
              )}
            </div>
            <div className="plan-box__title">Avanzado</div>
            <div className="plan-box__price">
              <span className="plan-box__small">S/</span>
              <span className="plan-box__big">200</span>
            </div>
            <div className="plan-box__footer">mensual</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className="plan-box"
            onClick={() => {
              setCardActive("third");
            }}
            style={
              cardActive === "third"
                ? { borderColor: "#83CC5E", borderWidth: 2 }
                : { borderColor: "#DEDEDE", borderWidth: 1 }
            }
          >
            <div className="plan-box__icon">
              {cardActive === "third" ? (
                <img
                  className="plan-box__icon-img"
                  src={IconSelected}
                  alt="select"
                />
              ) : (
                <img
                  className="plan-box__icon-img"
                  src={IconEmpty}
                  alt="select"
                />
              )}
            </div>
            <div className="plan-box__title">Premium</div>
            <div className="plan-box__price">
              <span className="plan-box__small">S/</span>
              <span className="plan-box__big">250</span>
            </div>
            <div className="plan-box__footer">mensual</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className="plan-box"
            onClick={() => {
              setCardActive("fourth");
            }}
            style={
              cardActive === "fourth"
                ? { borderColor: "#83CC5E", borderWidth: 2 }
                : { borderColor: "#DEDEDE", borderWidth: 1 }
            }
          >
            <div className="plan-box__icon">
              {cardActive === "fourth" ? (
                <img
                  className="plan-box__icon-img"
                  src={IconSelected}
                  alt="select"
                />
              ) : (
                <img
                  className="plan-box__icon-img"
                  src={IconEmpty}
                  alt="select"
                />
              )}
            </div>
            <div className="plan-box__title">Full</div>
            <div className="plan-box__price">
              <span className="plan-box__small">S/</span>
              <span className="plan-box__big">500</span>
            </div>
            <div className="plan-box__footer">mensual</div>
          </div>
        </Grid>
      </Grid>

      {cardActive === "first" && (
        <div className="plan-detail">
          <div className="plan-detail-container-top">
            Cuentas con estos beneficios
          </div>
          <div className="plan-detail-container">
            <div className="plan-detail__header">
              <span>
                <div className="plan-detail__title">Cobertura máxima</div>
                <div className="plan-detail__big">S/1MM</div>
                <div>
                  <span className="plan-detail__tag">Plan Básico</span>
                </div>
              </span>
              <Divider orientation="vertical" flexItem />
              <span>
                <img
                  className="plan-detail__icon"
                  src={IconShield1}
                  alt="shield"
                />
              </span>
            </div>
            <Divider />
            <ul className="plan-detail-list">
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Lima{" "}
                <span className="plan-detail-list__extra">
                  (zona de cobertura)
                </span>
              </li>
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                +30 clínicas{" "}
                <span className="plan-detail-list__extra">
                  (en red afiliada)
                </span>
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Médico a domicilio
              </li>
              <li className="plan-detail-list__item-small  plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Chequeos preventivos
              </li>
              <li className="plan-detail-list__item-small plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Reembolso nacional
              </li>
              <li className="plan-detail-list__item-small plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Reembolso internacional
              </li>
            </ul>
          </div>
        </div>
      )}

      {cardActive === "second" && (
        <div className="plan-detail">
          <div className="plan-detail-container-top">
            Cuentas con estos beneficios
          </div>
          <div className="plan-detail-container">
            <div className="plan-detail__header">
              <span>
                <div className="plan-detail__title">Cobertura máxima</div>
                <div className="plan-detail__big">S/5MM</div>
                <div>
                  <span className="plan-detail__tag">Plan avanzado</span>
                </div>
              </span>
              <Divider orientation="vertical" flexItem />
              <span>
                <img
                  className="plan-detail__icon"
                  src={IconShield}
                  alt="shield"
                />
              </span>
            </div>
            <Divider />
            <ul className="plan-detail-list">
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Lima{" "}
                <span className="plan-detail-list__extra">
                  (zona de cobertura)
                </span>
              </li>
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                +30 clínicas{" "}
                <span className="plan-detail-list__extra">
                  (en red afiliada)
                </span>
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Médico a domicilio
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Chequeos preventivos
              </li>
              <li className="plan-detail-list__item-small plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Reembolso nacional
              </li>
              <li className="plan-detail-list__item-small plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Reembolso internacional
              </li>
            </ul>
          </div>
        </div>
      )}
      {cardActive === "third" && (
        <div className="plan-detail">
          <div className="plan-detail-container-top">
            Cuentas con estos beneficios
          </div>
          <div className="plan-detail-container">
            <div className="plan-detail__header">
              <span>
                <div className="plan-detail__title">Cobertura máxima</div>
                <div className="plan-detail__big">S/10MM</div>
                <div>
                  <span className="plan-detail__tag">Plan premium</span>
                </div>
              </span>
              <Divider orientation="vertical" flexItem />
              <span>
                <img
                  className="plan-detail__icon"
                  src={IconShield3}
                  alt="shield"
                />
              </span>
            </div>
            <Divider />
            <ul className="plan-detail-list">
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Lima{" "}
                <span className="plan-detail-list__extra">
                  (zona de cobertura)
                </span>
              </li>
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                +30 clínicas{" "}
                <span className="plan-detail-list__extra">
                  (en red afiliada)
                </span>
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Médico a domicilio
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Chequeos preventivos
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Reembolso nacional
              </li>
              <li className="plan-detail-list__item-small plan-detail-list__item-small--disabled">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeartGray}
                  alt="heart"
                />
                Reembolso internacional
              </li>
            </ul>
          </div>
        </div>
      )}

      {cardActive === "fourth" && (
        <div className="plan-detail">
          <div className="plan-detail-container-top">
            Cuentas con estos beneficios
          </div>
          <div className="plan-detail-container">
            <div className="plan-detail__header">
              <span>
                <div className="plan-detail__title">Cobertura máxima</div>
                <div className="plan-detail__big">S/50 MM</div>
                <div>
                  <span className="plan-detail__tag">Plan full</span>
                </div>
              </span>
              <Divider orientation="vertical" flexItem />
              <span>
                <img
                  className="plan-detail__icon"
                  src={IconShield4}
                  alt="shield"
                />
              </span>
            </div>
            <Divider />
            <ul className="plan-detail-list">
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Lima{" "}
                <span className="plan-detail-list__extra">
                  (zona de cobertura)
                </span>
              </li>
              <li className="plan-detail-list__item">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                +30 clínicas{" "}
                <span className="plan-detail-list__extra">
                  (en red afiliada)
                </span>
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Médico a domicilio
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Chequeos preventivos
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Reembolso nacional
              </li>
              <li className="plan-detail-list__item-small">
                <img
                  className="plan-detail-list__icon"
                  src={IconHeart}
                  alt="heart"
                />
                Reembolso internacional
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="moreinfo-title">
        <h5 className="form-login__title-group form-login__title-group--nomargin">
          Revisa nuestros
        </h5>
        <h5 className="form-login__title-group--intent">
          servicios y exclusiones
        </h5>
      </div>
      <hr className="form-title__separator" />
      <div className="moreinfo-section">
        <p className="moreinfo-section__title">Servicios brindados</p>
        <img
          className="form-loging__icon"
          src={IconArrowDown}
          alt="arrow-down"
        />
      </div>
      <hr className="form-title__separator" />
      <div className="moreinfo-section">
        <p className="moreinfo-section__title">Exclusiones</p>
        <img
          className="form-loging__icon"
          src={IconArrowDown}
          alt="arrow-down"
        />
      </div>
      <hr className="form-title__separator" />
      <div style={{ marginTop: 50, marginBottom: 50, textAlign: "right" }}>
        <Button color="primary" type="button" style={{ marginRight: 5 }}>
          Enviar cotización por correo
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Comprar plan
        </Button>
      </div>
    </>
  );
};
