require('dotenv').config();
const nodemailer = require('nodemailer');

// Cấu hình transporter chỉ một lần
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Thay đổi cổng nếu cần
    secure: true, // Thay đổi cổng nếu cần
    auth: {
        user: process.env.EMAIL_APP,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});


const sendSimpleEmail = async (dataSend) => {
    try {
        let mailOptions;

        if (dataSend.type === 'verifyEmail') {
            mailOptions = {
                from: `"shopthoitrang" <${process.env.EMAIL_APP}>`, // Sử dụng biến môi trường cho địa chỉ người gửi
                to: dataSend.email, // Danh sách người nhận
                subject: 'Xác thực email | PTITSHOP', // Tiêu đề email
                html: getBodyHTMLEmailVerify(dataSend), // Nội dung email
            };
        } else if (dataSend.type === 'forgotpassword') {
            mailOptions = {
                from: `"shopthoitrang" <${process.env.EMAIL_APP}>`, // Sử dụng biến môi trường cho địa chỉ người gửi
                to: dataSend.email, // Danh sách người nhận
                subject: 'Xác nhận quên mật khẩu | PTITSHOP', // Tiêu đề email
                html: getBodyHTMLEmailForgotPassword(dataSend), // Nội dung email
            };
        } else {
            throw new Error('Loại email không hợp lệ');
        }

        // Gửi email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Lỗi gửi email:', error.message);
        return { success: false, message: `Lỗi gửi email: ${error.message}` };
    }
};

module.exports = {
    sendSimpleEmail
};

let getBodyHTMLEmailVerify = (dataSend) => {
    let fullname = `${dataSend.firstName} ${dataSend.lastName}`;
    return `<h3>Xin chào ${fullname}!</h3>
        <p>Bạn nhận được email này vì đã thực hiện lệnh xác thực email!</p>
        <p>Vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục xác minh email của bạn:</p>
        <div>
            <a href="${dataSend.redirectLink}" target="_blank">Click here</a>
        </div>
        <div>Xin cảm ơn!</div>
    `;
};

let getBodyHTMLEmailForgotPassword = (dataSend) => {
    let fullname = `${dataSend.firstName} ${dataSend.lastName}`;
    return `<h3>Xin chào ${fullname}!</h3>
        <p>Bạn nhận được email này vì đã thực hiện lệnh quên mật khẩu!</p>
        <p>Vui lòng click vào đường link bên dưới để xác nhận quên mật khẩu và lấy lại mật khẩu của bạn:</p>
        <div>
            <a href="${dataSend.redirectLink}" target="_blank">Click here</a>
        </div>
        <div>Xin cảm ơn!</div>
    `;
};

module.exports = {
    sendSimpleEmail
};

// let sendAttachment = async (dataSend) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let transporter = nodemailer.createTransport({
//                 host: "smtp.gmail.com",
//                 port: 587,
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                     user: process.env.EMAIL_APP,
//                     pass: process.env.EMAIL_APP_PASSWORD,
//                 },
//             });

//             let info = await transporter.sendMail({
//                 from: '"BiNgo2706 👻" <dotanthanhvlog@gmail.com>', // sender address
//                 to: dataSend.email, // list of receivers
//                 subject: "Thông tin đặt lịch khám bệnh", // Subject line
//                 html: getBodyHTMLEmailRemedy(dataSend),
//                 attachments: [
//                     {
//                         filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.${dataSend.filename}`,
//                         content: dataSend.imgBase64.split("base64,")[1],
//                         encoding: 'base64'
//                     }
//                 ]
//             });
//             resolve()
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
module.exports = {
    sendSimpleEmail: sendSimpleEmail,

}