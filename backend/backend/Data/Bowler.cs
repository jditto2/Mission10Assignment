using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Data
{
    public class Bowler
    {
        [Key]
        public int BowlerID { get; set; }

        [Required]
        [MaxLength(50)]
        public string BowlerFirstName { get; set; }

        [MaxLength(50)]
        public string? BowlerMiddleInit { get; set; }

        [Required]
        [MaxLength(50)]
        public string BowlerLastName { get; set; }

        [Required]
        [MaxLength(100)]
        public string BowlerAddress { get; set; }

        [Required]
        [MaxLength(50)]
        public string BowlerCity { get; set; }

        [Required]
        [MaxLength(2)]
        public string BowlerState { get; set; }

        [Required]
        [MaxLength(10)]
        public string BowlerZip { get; set; }

        [Required]
        [MaxLength(15)]
        public string BowlerPhoneNumber { get; set; }

        [ForeignKey("Team")]
        public int TeamID { get; set; }
        public Team Team { get; set; }


    }
}
