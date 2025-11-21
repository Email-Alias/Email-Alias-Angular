async function getCurrentDomain() {
    return "google";
}

async function getConfig() {
    return {
        messages: {
            copiedToClipboard: "Copied email to clipboard",
            ok: "OK",
            register: "You are unregistered. Please register in the app.",
            highlightedEmails: "Highlighted Emails",
            remainingEmails: "Remaining Emails",
            unregisteredTitle: "Register",
            registeredTitle: "Emails",
            licenses: "Licenses",
        },
        colorScheme: 0,
        isPhone: true,
        registered: true,
        emails: '[{"id": 0, "address": "vAcd8HJOj6h9Hfq9n8F0@example.com", "private_comment": "Apple"}, {"id": 1, "address": "gQo5Nu.H7j774eh3mscM@example.com", "private_comment": "Google"}]',
    };
}
