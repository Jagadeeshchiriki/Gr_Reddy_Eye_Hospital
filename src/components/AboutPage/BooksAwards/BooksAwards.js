import React from "react";
import "./BooksAwards.css";

// Images
import book1 from "../../../assets/images/HomePage/awward1.png";
import book2 from "../../../assets/images/HomePage/awward2.png";
import book3 from "../../../assets/images/HomePage/awward3.png";
import book4 from "../../../assets/images/HomePage/awward4.png";
import book5 from "../../../assets/images/HomePage/awward5.png";

const books = [
  { id: 1, image: book1 },
  { id: 2, image: book2 },
  { id: 3, image: book3 },
  { id: 4, image: book4 },
  { id: 5, image: book5 },
];

const BooksAwards = () => {
  return (
    <section className="books-awards-section">
      <div className="books-header">
        <h2>Books That Educate.<br/>Awards That Inspire.</h2>
        <p>Dr. G. R. Reddy's contributions to ophthalmology extend beyond clinical practice through authorship, teaching, and decades of professional service.</p>
      </div>
      
      <div className="books-perspective-container">
        <div className="books-gallery">
          {books.map((book, index) => {
            // Determine position class based on index (0 to 4)
            // 0: far left, 1: mid left, 2: center, 3: mid right, 4: far right
            let positionClass = "";
            if (index === 0) positionClass = "far-left";
            else if (index === 1) positionClass = "mid-left";
            else if (index === 2) positionClass = "center";
            else if (index === 3) positionClass = "mid-right";
            else if (index === 4) positionClass = "far-right";

            return (
              <div key={book.id} className={`book-card ${positionClass}`}>
                <img src={book.image} alt={`Award ${book.id}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BooksAwards;
