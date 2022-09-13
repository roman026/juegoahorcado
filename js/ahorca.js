const canvas = () => {
  var ctx = document.getElementById("canvas").getContext("2d");

  // #layer1
  const pierna_der = () => {
    // #pierna_der
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 7.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(420.18047, 285.16429);
    ctx.lineTo(459.37839, 364.72698);
    ctx.stroke();
  };

  const pierna_izq = () => {
    // #pieran_izq
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 7.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(420.20819, 285.22006);
    ctx.lineTo(371.58419, 364.65878);
    ctx.stroke();
  };

  const brazo_der = () => {
    // #brazo_der
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 7.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(420.36243, 197.34444);
    ctx.lineTo(481.86027, 262.05394);
    ctx.stroke();
  };

  const brazo_izq = () => {
    // #brazo_izq
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 7.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(419.86027, 197.4193);
    ctx.lineTo(358.36243, 262.1288);
    ctx.stroke();
  };

  const cuerpo = () => {
    // #cuerpo
    ctx.beginPath();
    ctx.fillStyle = "rgb(36, 28, 28)";
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 6.45671;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(420.16558, 173.05776);
    ctx.lineTo(420.16558, 285.96378);
    ctx.fill();
    ctx.stroke();
  };

  const cabeza = () => {
    // #cabeza
    ctx.beginPath();
    ctx.fillStyle = "rgb(160, 90, 44)";
    ctx.lineWidth = 0.0;
    ctx.arc(420.66159, 143.6221, 29.456692, 0.0, 6.28318531, 1);
    ctx.fill();

    // #boca
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 0.834957;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(407.77381, 155.978);
    ctx.bezierCurveTo(
      407.77381,
      155.978,
      412.58102,
      161.50382,
      421.6814,
      161.59479
    );
    ctx.bezierCurveTo(
      430.78696,
      161.68579,
      434.76807,
      155.75265,
      434.76807,
      155.75265
    );
    ctx.stroke();

    // #nariz
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 0.834957;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(418.66205, 134.60157);
    ctx.lineTo(414.98266, 149.14777);
    ctx.lineTo(421.00894, 149.05537);
    ctx.stroke();

    // #ojo_der
    ctx.beginPath();
    ctx.fillStyle = "rgb(36, 28, 28)";
    ctx.lineWidth = 0.0;
    ctx.arc(430.96997, 135.41251, 3.294956, 0.0, 6.28318531, 1);
    ctx.fill();

    // #ojo_izq
    ctx.beginPath();
    ctx.fillStyle = "rgb(36, 28, 28)";
    ctx.lineWidth = 0.0;
    ctx.arc(408.35458, 135.64546, 3.294956, 0.0, 6.28318531, 1);
    ctx.fill();
  };

  const soga = () => {
    // #soga
    ctx.beginPath();
    ctx.strokeStyle = "rgb(110, 71, 25)";
    ctx.lineWidth = 5.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(419.98843, 22.97885);
    ctx.lineTo(419.98843, 116.38316);
    ctx.stroke();
  };

  const ahorca = () => {
    // #madera1
    ctx.beginPath();
    ctx.fillStyle = "rgb(120, 68, 33)";
    ctx.strokeStyle = "rgb(105, 72, 53)";
    ctx.lineWidth = 35.3343;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(181.11081, 556.62252);
    ctx.lineTo(181.11081, 5.42941);
    ctx.fill();
    ctx.stroke();

    // #madera2
    ctx.beginPath();
    ctx.strokeStyle = "rgb(104, 71, 53)";
    ctx.lineWidth = 20.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(163.88904, 15.26521);
    ctx.lineTo(427.14583, 15.26521);
    ctx.stroke();

    // #piso
    ctx.beginPath();
    ctx.fillStyle = "rgb(34, 85, 0)";
    ctx.strokeStyle = "rgb(22, 80, 22)";
    ctx.lineWidth = 40.0;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.moveTo(6.845168, 575.28187);
    ctx.lineTo(555.31335, 575.28187);
    ctx.fill();
    ctx.stroke();
  };
  return {
    ahorca,
    soga,
    cabeza,
    cuerpo,
    brazo_izq,
    brazo_der,
    pierna_izq,
    pierna_der,
  };
};
