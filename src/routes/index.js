import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Profile from '~/components/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
