const _0xa6248c = _0x50db; (function (_0x16c9f7, _0x1bf473) { const _0x4880fa = _0x50db, _0x232d32 = _0x16c9f7(); while (!![]) { try { const _0x2e6728 = parseInt(_0x4880fa(0x162)) / 0x1 + -parseInt(_0x4880fa(0x161)) / 0x2 + -parseInt(_0x4880fa(0x156)) / 0x3 + -parseInt(_0x4880fa(0x15f)) / 0x4 * (-parseInt(_0x4880fa(0x166)) / 0x5) + parseInt(_0x4880fa(0x157)) / 0x6 + -parseInt(_0x4880fa(0x15d)) / 0x7 * (parseInt(_0x4880fa(0x158)) / 0x8) + parseInt(_0x4880fa(0x155)) / 0x9 * (parseInt(_0x4880fa(0x168)) / 0xa); if (_0x2e6728 === _0x1bf473) break; else _0x232d32['push'](_0x232d32['shift']()); } catch (_0x945f01) { _0x232d32['push'](_0x232d32['shift']()); } } }(_0x1ab2, 0x3f536)); import { Router } from 'express'; import _0x5b4196 from './routes/sessionsRoute.js'; import _0x609d48 from './routes/chatsRoute.js'; import _0x21ac9d from './routes/groupsRoute.js'; function _0x1ab2() { const _0x5be681 = ['1895364lRqCYA', '72ruVNWH', '/plan', 'The\x20requested\x20url\x20cannot\x20be\x20found.', '/send-message', '/groups', '241297bwNyit', '/sessions', '4mJDiug', 'use', '384718NYjmtq', '364336ZQMPLP', '/campaign', '/templet', '/poll', '169500gpgpXF', '/phonebook', '130NIkBqf', '/ping', '/admin', '158805nsUvFj', '544605YSQXud']; _0x1ab2 = function () { return _0x5be681; }; return _0x1ab2(); } import _0x136a49 from './routes/userRoute.js'; import _0x3705e9 from './response.js'; import _0x590282 from './routes/adminRoute.js'; import _0x32db5b from './routes/planRoute.js'; import _0x249ee9 from './routes/pingRoute.js'; import _0x4a22c7 from './routes/botRoute.js'; import _0x2b6560 from './routes/templetRoute.js'; import _0x2a8cb5 from './routes/sendMessageRoute.js'; import _0x117d9d from './routes/phonebookRoute.js'; import _0x390360 from './routes/campaignRoute.js'; import _0xe3d57f from './routes/pollRoute.js'; import _0x134078 from './routes/webRouts.js'; const router = Router(); router['use'](_0xa6248c(0x15e), _0x5b4196), router[_0xa6248c(0x160)]('/chats', _0x609d48), router[_0xa6248c(0x160)](_0xa6248c(0x15c), _0x21ac9d), router[_0xa6248c(0x160)]('/user', _0x136a49), router[_0xa6248c(0x160)](_0xa6248c(0x154), _0x590282), router[_0xa6248c(0x160)](_0xa6248c(0x159), _0x32db5b), router['use'](_0xa6248c(0x153), _0x249ee9), router[_0xa6248c(0x160)]('/bot', _0x4a22c7), router[_0xa6248c(0x160)](_0xa6248c(0x15b), _0x2a8cb5), router[_0xa6248c(0x160)](_0xa6248c(0x164), _0x2b6560), router['use'](_0xa6248c(0x167), _0x117d9d), router[_0xa6248c(0x160)]('/web', _0x134078), router['use'](_0xa6248c(0x163), _0x390360), router[_0xa6248c(0x160)](_0xa6248c(0x165), _0xe3d57f), router['all']('*', (_0x503150, _0x51c5c3) => { const _0xa28e25 = _0xa6248c; _0x3705e9(_0x51c5c3, 0x194, ![], _0xa28e25(0x15a)); }); function _0x50db(_0x2dee97, _0x59e375) { const _0x1ab25c = _0x1ab2(); return _0x50db = function (_0x50db81, _0x56d6b9) { _0x50db81 = _0x50db81 - 0x153; let _0xe4288c = _0x1ab25c[_0x50db81]; return _0xe4288c; }, _0x50db(_0x2dee97, _0x59e375); } export default router;