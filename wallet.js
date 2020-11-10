const allowedTypes = ['VerifiablePresentation', 'VerifiableCredential']

export class WalletBridge {
    // install credential handler polyfill handlers
    async installHandlers(user) {
        try {
            await credentialHandlerPolyfill.loadOnce();
        } catch (e) {
            console.error('Error in loadOnce:', e);
            throw "failed to register wallet, please try again later"
        }

        const registration = await WebCredentialHandler.installHandler({url: `/worker.html`})

        await registration.credentialManager.hints.set(
            'edge', {
                name: user,
                enabledTypes: allowedTypes,
            });
    }
}
