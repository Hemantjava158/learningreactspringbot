
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please sign up.</h1>;
    }
}

function UserRole(props) {
    const role = props.role;

    if (role === "admin") {
        return <h2>Welcome, Admin!</h2>;
    } else if (role === "editor") {
        return <h2>Welcome, Editor!</h2>;
    } else {
        return <h2>Welcome, Guest!</h2>;
    }
}

function UserStatus(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            <h2>
                {isLoggedIn ? "Welcome back!" : "Please log in"}
            </h2>
        </div>
    );
}

function DayMessage(props) {
    const day = props.day;

    let message;

    switch (day) {
        case "Monday":
            message = "Start of the work week!";
            break;

        case "Friday":
            message = "Almost the weekend!";
            break;

        case "Saturday":
        case "Sunday":
            message = "It's the weekend!";
            break;

        default:
            message = "Have a great day!";
    }

    return <h2>{message}</h2>;
}

function Notification(props) {
    const hasNotifications = props.hasNotifications;

    return (
        <div>
            <h2>Notifications</h2>

            {hasNotifications && (
                <p>You have new notifications!</p>
            )}
        </div>
    );
}

export default function ConditionalRendering() {
    return (
        <>
        <h2>Conditional Rendering</h2>

            <Greeting isLoggedIn={true} />

            <UserRole role="admin" />

            <UserStatus isLoggedIn={true} />

            <DayMessage day="Monday" />

            <Notification hasNotifications={true} />
        </>
    );
}

