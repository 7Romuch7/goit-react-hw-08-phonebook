export default function AppBar() {
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
}