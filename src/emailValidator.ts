export function isValidEmail(email: string): boolean {

    // contenir au moins un @
    const atIndex = email.indexOf('@');
    if (atIndex == -1) return false;

    // ne peut contenir aucun espace
    if (email.includes(' ')) return false;

    // avoir du texte avant et après le @
    const local = email.slice(0, atIndex);
    const domain = email.slice(atIndex + 1);
    if (local.length === 0 || domain.length === 0) return false;

    // contenir au moins un point dans le nom de domaine
    const dotIndex = domain.indexOf('.');
    if (dotIndex === -1 || dotIndex === domain.length - 1) return false;

    return true;
}