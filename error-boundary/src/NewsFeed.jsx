export default function NewsFeed (props) {
    const data = props.data
    return (
        <div>
            <h1>Today's News!</h1>
            <ul>
                <li>
                    {data.headline}
                </li>
                <li>
                    {data.article}
                </li>
            </ul>
        </div>
    );
}