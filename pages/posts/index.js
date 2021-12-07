import { google } from 'googleapis';
import Link from 'next/link';

export async function getServerSideProps({query}) {
	const auth = await google.auth.getClient({
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	});

	const sheets = google.sheets({version: 'v4', auth});

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range: 'Sheet1!C2:C'
	});

	const posts = response.data.values.flat();
	return {
		props: {
			posts
		}
	};
}

export default function Posts({posts}) {
	return(
		<article>
			<h1>Core Team Interviewees</h1>
			<p>Total number of people requested: {posts.length}</p>
			<ol>
				{posts.map((v, i) => (
					<li key={v}>
						<Link href={`/posts/${i+2}`}>
							<a>{v}</a>
						</Link>
					</li>
				))}
				<br />
			</ol>
		</article>
	)
}