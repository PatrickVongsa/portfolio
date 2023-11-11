export default function pathRedirect(req, res) {
    res.writeHead(307, { Location: '/' });
    res.end();
};