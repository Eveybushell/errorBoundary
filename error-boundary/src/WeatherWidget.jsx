export default function WeatherWidget (props) {
    const data = props.data
    return (
        <div>
            <h1>Weather</h1><br/>
            <p>{data.temperature}</p>
        </div>
    );
}