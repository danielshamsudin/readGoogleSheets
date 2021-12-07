import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const { id } = query;
  const range = `Sheet1!B${id}:R${id}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const [
    username,
    name,
    phone,
    link,
    interest,
    expectations,
    discord,
    experience,
    introduce,
    cocuexp,
    cocuinv,
    studentid,
    campus,
    faculty,
    yjct, // why join core team
    team,
    extraques,
  ] = response.data.values[0];

  return {
    props: {
      username,
      name,
      phone,
      link,
      interest,
      expectations,
      discord,
      experience,
      introduce,
      cocuexp,
      cocuinv,
      studentid,
      campus,
      faculty,
      yjct,
      team,
      extraques,
    },
  };
}

export default function Post({
  username,
  name,
  phone,
  link,
  interest,
  expectations,
  discord,
  experience,
  introduce,
  cocuexp,
  cocuinv,
  studentid,
  campus,
  faculty,
  yjct,
  team,
  extraques,
}) {
  return (
    <article>
      <h1>Name</h1>
	  <p>{name}</p>
	  <h1>Phone Number</h1>
	  <p>{phone}</p>
	  <h1>Link</h1>
	  <p>{link}</p>
	  <h1>Interest</h1>
	  <p>{interest}</p>
	  <h1>Expectations</h1>
	  <p>{expectations}</p>
	  <h1>Discord Tag</h1>
	  <p>{discord}</p>
	  <h1>Experiences</h1>
	  <p>{experience}</p>
	  <h1>Introduce Yourself</h1>
	  <p>{introduce}</p>
	  <h1>Co-curiculum Experience</h1>
	  <p>{cocuexp}</p>
	  <h1>Involvement in co-curiculum</h1>
	  <p>{cocuinv}</p>
	  <h1>Student ID</h1>
	  <p>{studentid}</p>
	  <h1>Campus (Cyberjaya / Melaka)</h1>
	  <p>{campus}</p>
	  <h1>Faculty</h1>
	  <p>{faculty}</p>
	  <h1>Why join core team?</h1>
	  <p>{yjct}</p>
	  <h1>Which Team to join?</h1>
	  <p>{team}</p>
	  <h1>Any extra question to ask us?</h1>
	  <p>{extraques}</p>
    </article>
  );
}
