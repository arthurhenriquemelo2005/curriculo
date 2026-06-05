import tkinter as tk
from tkinter import messagebox


def calcular_nota():

    try:
        sm1 = float(entry_sm1.get())
        sm2 = float(entry_sm2.get())
        p1 = float(entry_p1.get())
        p2 = float(entry_p2.get())
        p3 = float(entry_p3.get())

        # Validação das notas

        if sm1 < 0 or sm1 > 1.0:
            messagebox.showerror("Erro", "Nota inválida para SM1")
            return

        if sm2 < 0 or sm2 > 1.0:
            messagebox.showerror("Erro", "Nota inválida para SM2")
            return

        if p1 < 0 or p1 > 1.5:
            messagebox.showerror("Erro", "Nota inválida para P1")
            return

        if p2 < 0 or p2 > 2.5:
            messagebox.showerror("Erro", "Nota inválida para P2")
            return

        if p3 < 0 or p3 > 6.0:
            messagebox.showerror("Erro", "Nota inválida para P3")
            return

        # CORRIGIDO: Alinhado corretamente dentro do bloco try
        nota_final = sm1 + sm2 + p1 + p2 + p3

        if nota_final > 10:
            messagebox.showinfo("Aviso", "A nota máxima é 10.")
            nota_final = 10

        if nota_final >= 6:
            situacao = "APROVADO"
        else:
            situacao = "REPROVADO"

        resultado.config(
            text=f"Nota Final: {nota_final:.2f}\nSituação: {situacao}"
        )

    except ValueError:
        messagebox.showerror("Erro", "Digite apenas números")


janela = tk.Tk()
janela.title("Nota Final - Estácio")
janela.geometry("400x500")
janela.config(bg="white")

# ==============================================================================
# --- COMO BOTAR A LOGO (Adicionado aqui) ---
# ==============================================================================
try:
    # 1. Tenha o arquivo 'logo_estacio.png' salvo na MESMA PASTA deste script.
    # 2. A imagem DEVE ser em formato .png ou .gif. O Tkinter padrão não lê .jpg para ícones.
    # 3. Dê preferência a imagens quadradas (ex: 32x32, 64x64) para não distorcer.
    
    icon_image = tk.PhotoImage(file="logo-estacio.png")
    
    # Aplica o ícone na janela
    janela.iconphoto(False, icon_image)
except Exception as e:
    # Se der erro (como arquivo não encontrado), o programa abre com o ícone padrão
    print(f"Aviso: Não foi possível carregar a logo personalizada. Erro: {e}")
# ==============================================================================


titulo = tk.Label(
    janela,
    text="CÁLCULO DE NOTA FINAL",
    font=("Arial", 16, "bold"),
    bg="white"
)
# CORRIGIDO: Linha 'tk.tk' que estava aqui foi removida para não travar
titulo.pack(pady=20)


tk.Label(janela, text="SM1 (0 a 1.0)", bg="white").pack()
entry_sm1 = tk.Entry(janela)
entry_sm1.pack()

tk.Label(janela, text="SM2 (0 a 1.0)", bg="white").pack()
entry_sm2 = tk.Entry(janela)
entry_sm2.pack()

tk.Label(janela, text="P1 (0 a 1.5)", bg="white").pack()
entry_p1 = tk.Entry(janela)
entry_p1.pack()

tk.Label(janela, text="P2 (0 a 2.5)", bg="white").pack()
entry_p2 = tk.Entry(janela)
entry_p2.pack()

tk.Label(janela, text="P3 (0 a 6.0)", bg="white").pack()
entry_p3 = tk.Entry(janela)
entry_p3.pack()


botao = tk.Button(
    janela,
    text="Calcular Nota",
    command=calcular_nota,
    bg="blue",
    fg="white",
    font=("Arial", 12, "bold")
)

botao.pack(pady=20)

resultado = tk.Label(
    janela,
    text="",
    font=("Arial", 14),
    bg="white"
)

resultado.pack(pady=20)

janela.mainloop()