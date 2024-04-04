string rna = "AUGUUUUCUUAAAUG";
var proteins = ProteinTranslation.Proteins(rna);

Console.WriteLine($"{rna} -> ${String.Join(", ", proteins)}");